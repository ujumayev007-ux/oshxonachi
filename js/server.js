const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// Express uchun CORS ni yoqish
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Render va turli domenlardan ulana olish uchun Socket.io CORS sozlamasi
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Xotiradagi vaqtinchalik buyurtmalar ro'yxati
let orders = [];

io.on('connection', (socket) => {
    console.log('Foydalanuvchi ulandi: ', socket.id);

    // Barcha buyurtmalarni yangi ulangan panelga yuborish
    socket.emit('init_orders', orders);

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

    // Ofitsiantni chaqirish hodisasi
    socket.on('call_waiter', (data) => {
        io.emit('call_waiter', data);
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

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server ishga tushdi: http://localhost:${PORT}`);
});
