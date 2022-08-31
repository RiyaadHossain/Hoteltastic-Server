const express = require('express');
const route = express.Router()
const { signUp } = require('../controller/userController');

route.get("/", signUp)

module.exports = route