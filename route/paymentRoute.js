const express = require('express');
const { authenticateUser } = require('../middleware/auth');
const paymentController = require('../controller/paymentController');

const route = express.Router()

route.get("/payment", authenticateUser, paymentController.payment)

module.exports = route 