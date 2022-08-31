const route = express.Router()
const express = require('express');
const { signUp } = require('../controller/userController');

route.get("/", signUp)