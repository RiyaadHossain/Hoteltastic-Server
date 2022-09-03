const express = require('express');
const reviewController = require('../controller/reviewController');
const { authenticateUser } = require("../middleware/auth")

const route = express.Router()

route.get("/allReviews", reviewController.allReviews)
route.get("/review/:id", reviewController.getReview)
route.post("/addReview", authenticateUser, reviewController.addReview)
route.patch("/updateReview/:id", authenticateUser, reviewController.updateReview)
route.delete("/deleteReview/:id", authenticateUser, reviewController.deleteReview)

module.exports = route