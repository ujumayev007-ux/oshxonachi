// controllers/waiter.controller.js
// Ofitsiant buyurtmalari uchun biznes-mantiq
exports.createOrder = (req, res) => {
    const orderData = req.body;
    res.json({ success: true, message: 'Buyurtma qabul qilindi', order: orderData });
};
