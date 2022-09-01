const express = require('express');
const route = express.Router()
const controller = require('../controller/adminController');

route.post("/signup", controller.signUp)
route.post("/signin", controller.signIn)

module.exports = route