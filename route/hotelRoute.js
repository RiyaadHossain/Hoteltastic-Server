const express = require('express');
const hotelController = require('../controller/hotelController');
const { authenticateAdmin } = require('../middleware/auth');
const upload = require('../middleware/upload');

const route = express.Router()

route.get("/allRooms", hotelController.getRooms)
route.get("/singelRoom/:id", hotelController.getRoom)
route.post("/createRoom",  hotelController.createRoom)
route.patch("/updateRoom/:id",  hotelController.updateRoom)
route.delete("/deleteRoom/:id", authenticateAdmin, hotelController.deleteRoom)

module.exports = route