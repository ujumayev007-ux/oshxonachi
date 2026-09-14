// routes/admin.routes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/inventory', adminController.getInventory);
router.post('/inventory', adminController.addInventoryItem);

module.exports = router;
