const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Xotiradagi vaqtinchalik buyurtmalar ro'yxati (real loyihada ma'lumotlar bazasi ulanadi)
let orders = [];

io.on('connection', (socket) => {
    console.log('Foydalanuvchi ulandi: ', socket.id);

    // Barcha buyurtmalarni yangi ulangan panelga yuborish
    socket.emit('init_orders', orders);

    // Yangi buyurtma kelganda (ofitsiant tomonidan yuborilganda)
    socket.op('new_order', (orderData) => {
        const newOrder = {
            id: Date.now(),
            items: orderData.items,
            table: orderData.table,
            status: 'Qabul qilindi', // Boshlang'ich holati
            createdAt: new Date().toLocaleTimeString()
        };
        orders.push(newOrder);
        
        // Barcha ulangan panelga (admin va ofitsiantlarga) yangi buyurtmani tarqatish
        io.emit('update_orders', orders);
    });

    // Admin panelidan buyurtma holatini o'zgartirganda (Qabul / Jarayonda / Tayyor)
    socket.on('change_status', ({ orderId, status }) => {
        const order = orders.find(o => o.id === orderId);
        if (order) {
            order.status = status;
            // Barcha panellarga yangilangan holatni yuborish
            io.emit('update_orders', orders);
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
