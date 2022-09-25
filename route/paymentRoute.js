const express = require('express')
const { authenticateUser } = require('../middleware/auth')
const paymentController = require('../controller/paymentController')

const route = express.Router()
// authenticateUser,
route.post('/', paymentController.payment)
route.get('/allBookings', paymentController.getAllBooking)
route.delete('/deleteBooking/:id', paymentController.deleteBooking)

module.exports = route
