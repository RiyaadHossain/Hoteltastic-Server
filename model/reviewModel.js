const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    userId: String,
    rattings: String,
    review: {
        type: String,
        required: true,
        max: 50
    },
    roomId: String
})

const ReviewModel = mongoose.model("Review", reviewSchema)

module.exports = ReviewModel