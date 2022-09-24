const express = require('express')
const { authenticateUser } = require('../middleware/auth')
const paymentController = require('../controller/paymentController')

const route = express.Router()
console.log(paymentController.payment)
// authenticateUser,
route.post('/', paymentController.payment)

module.exports = route
