const express = require('express');
const route = express.Router()
const upload = require('../middleware/upload');
const controller = require('../controller/userController');

route.post("/signup", upload.single("avatar", 1), controller.signUp)
route.post("/signin", controller.signIn)
route.get("/getUser", controller.getUser)

module.exports = route