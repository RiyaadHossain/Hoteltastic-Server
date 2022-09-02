const express = require('express');
const route = express.Router()
const controller = require('../controller/adminController');
const commonMiddleware = require('..//middleware/auth');

route.post("/signup", controller.signUp)
route.post("/signin", controller.signIn)
route.post("/verify", commonMiddleware.authenticateAdmin)

module.exports = route