const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// Express uchun CORS va ma'lumotlarni o'qish sozlamalari
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname)); // HTML fayllar turgan asosiy papka uchun

// Render va turli domenlardan ulana olish uchun Socket.io CORS sozlamasi
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Yo'nalishlar (Routes)
app.use('/api/admin', require('./routes/admin.routes'));
app.use('/api/waiter', require('./routes/waiter.routes'));

// Xotiradagi vaqtinchalik buyurtmalar va menyu ro'yxati
let orders = [];
let currentMenu = []; // Menyu ma'lumotlarini saqlash uchun

// Socket.io real-vaqt mantiqi
io.on('connection', (socket) => {
    console.log('Foydalanuvchi ulandi: ', socket.id);

    // Barcha buyurtmalar va menyuni yangi ulangan panelga yuborish
    socket.emit('init_orders', orders);
    socket.emit('init_menu', currentMenu);

    // Admin menyuni o'zgartirganda yoki yangilaganda
    socket.on('update_menu', (newMenu) => {
        if (Array.isArray(newMenu)) {
            currentMenu = newMenu;
            // Barcha ulangan qurilmalarga (mijozlar va ofitsiantlarga) yangi menyuni tarqatish
            io.emit('init_menu', currentMenu);
        }
    });

    // Yangi buyurtma kelganda yoki mavjud buyurtma yangilanganda
    socket.on('new_order', (orderData) => {
        const existingIndex = orders.findIndex(o => 
            String(o.table) === String(orderData.table) || 
            String(o.id) === String(orderData.id)
        );

        if (existingIndex !== -1) {
            orders[existingIndex] = {
                ...orders[existingIndex],
                ...orderData
            };
        } else {
            const newOrder = {
                id: orderData.id || Date.now(),
                items: orderData.items,
                table: orderData.table,
                status: orderData.status || 'Qabul qilindi',
                createdAt: orderData.createdAt || new Date().toLocaleTimeString()
            };
            orders.push(newOrder);
        }

        // Barcha ulangan panellarga yangilangan ro'yxatni tarqatish
        io.emit('update_orders', orders);
    });

    // Waiter chek chiqarganda buyurtmaning chop etilgan holatini tarqatish
    socket.on('status_updated', (orderData) => {
        if (!orderData) return;

        const orderKey = orderData.orderId || orderData.id || orderData.tableNumber || orderData.table;
        const existingIndex = orders.findIndex(order =>
            String(order.id) === String(orderKey) ||
            String(order.tableNumber || order.table) === String(orderKey)
        );

        if (existingIndex !== -1) {
            orders[existingIndex] = { ...orders[existingIndex], ...orderData };
        } else {
            orders.push({
                ...orderData,
                id: orderData.id || orderKey,
                table: orderData.table || orderData.tableNumber,
                status: orderData.status || 'yangi'
            });
        }

        io.emit('status_updated', orderData);
        io.emit('update_orders', orders);
    });

    // Ofitsiantni chaqirish hodisalari (barcha ulangan ofitsiantlarga broadcast qilinadi)
    socket.on('call_waiter', (data) => {
        io.emit('call_waiter', data);
    });

    socket.on('table_called', (data) => {
        io.emit('table_called', data);
    });

    // Ofitsiant yo'lda ekanligi haqidagi hodisa
    socket.on('waiter_on_the_way', (data) => {
        io.emit('waiter_on_the_way', data);
    });

    // Admin panelidan buyurtma holatini o'zgartirganda (Qabul / Jarayonda / Tayyor)
    socket.on('change_status', ({ orderId, status }) => {
        const order = orders.find(o => o.id === orderId);
        if (order) {
            order.status = status;

            // 1. Barcha panellarga yangilangan umumiy buyurtmalar ro'yxatini yuborish
            io.emit('update_orders', orders);

            // 2. Ofitsiant paneli va maxsus bildirishnomalar uchun alohida hodisa yuborish
            io.emit('status_updated', {
                orderId: order.id,
                status: order.status,
                table: order.table
            });
        }
    });

    socket.on('disconnect', () => {
        console.log('Foydalanuvchi uzildi: ', socket.id);
    });
});

const open = require('open');

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server ishga tushdi: http://localhost:${PORT}`);
    // Dastur ishga tushishi bilan brauzerni avtomatik ochadi:
    open(`http://localhost:${PORT}`);
});
