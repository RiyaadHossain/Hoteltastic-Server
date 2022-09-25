const express = require('express')
const route = express.Router()
const controller = require('../controller/adminController')
const { getAllAdmin } = require('../controller/userController')
const commonMiddleware = require('../middleware/auth')

// commonMiddleware.authenticateAdmin
route.get('/admins', getAllAdmin)
route.post('/signup', controller.signUp)
route.post('/signin', controller.signIn)
route.post('/verify', commonMiddleware.authenticateAdmin)

module.exports = route
