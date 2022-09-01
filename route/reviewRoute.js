const express = require('express');
const reviewController = require('../controller/reviewController');
const { authenticateUser } = require("../middleware/middleware")

const route = express.Router()

route.get("/allReviews", authenticateUser, reviewController.allReviews)
route.get("/review/:id", authenticateUser, reviewController.getReview)
route.post("/review", authenticateUser, reviewController.addReview)
route.patch("/updateReview/:id", authenticateUser, reviewController.updateReview)
route.delete("/deleteReview/:id", authenticateUser, reviewController.deleteReview)