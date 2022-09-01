const express = require('express');
const hotelController = require('../controller/hotelController');

const route = express.Router()

route.get("/allRooms", hotelController.getRooms)
route.get("/allRoom", hotelController.getRoom)
route.post("/createRoom", hotelController.createRoom)

module.exports = route