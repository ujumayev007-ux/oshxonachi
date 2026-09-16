// sockets/orderSocket.js
// Ofitsiant va admin ekranlarini Socket.io orqali bog'lash
module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log('Foydalanuvchi ulandi:', socket.id);

        socket.on('newOrder', (data) => {
            console.log('Yangi buyurtma keldi:', data);
            // Barcha ulangan admin va oshxona ekranlariga yuborish
            io.emit('orderReceived', data);
        });

        socket.on('disconnect', () => {
            console.log('Foydalanuvchi tarmoqdan uzildi:', socket.id);
        });
    });
};
