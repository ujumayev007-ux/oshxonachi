// controllers/adminController.js
// Omborxona va tannarx boshqaruvi uchun biznes-mantiq
exports.getInventory = (req, res) => {
    res.json({ success: true, message: 'Omborxona mahsulotlari ro\'yxati' });
};

exports.addInventoryItem = (req, res) => {
    const itemData = req.body;
    res.json({ success: true, message: 'Mahsulot omborga qo\'shildi', data: itemData });
};
