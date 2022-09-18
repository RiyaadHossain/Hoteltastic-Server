const express = require('express');
const hotelController = require('../controller/hotelController');
const { authenticateAdmin } = require('../middleware/auth');
const upload = require('../middleware/upload');

const route = express.Router()

route.get("/allRooms", hotelController.getRooms)
route.get("/room/:id", hotelController.getRoom)
route.post("/createRoom", /* authenticateAdmin, */ upload.single("picture", 1), hotelController.createRoom)
route.patch("/updateRoom/:id", authenticateAdmin, hotelController.updateRoom)
route.delete("/deleteRoom/:id", authenticateAdmin, hotelController.deleteRoom)

module.exports = route