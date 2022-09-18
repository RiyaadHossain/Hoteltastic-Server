const express = require("express");
const route = express.Router();
const upload = require("../middleware/upload");
const controller = require("../controller/userController");

route.post("/signup", upload.single("avatar", 1), controller.signUp)
route.post("/signin", controller.signIn)
route.post("/socialLogin", controller.socialLogin)
route.get("/getUser/:email", controller.getUser)

module.exports = route;
