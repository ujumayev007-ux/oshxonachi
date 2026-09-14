// routes/waiter.routes.js
const express = require('express');
const router = express.Router();
const waiterController = require('../controllers/waiter.controller');

router.post('/order', waiterController.createOrder);

module.exports = router;
