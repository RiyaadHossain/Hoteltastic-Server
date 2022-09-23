const mongoose = require('mongoose');
const {Schema} = require('mongoose') 
const reviewSchema = mongoose.Schema({
    rattings: String,
    review: {
        type: String,
        required: true,
        max: 50
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room',
        required: true
    }
})

const ReviewModel = mongoose.model("Review", reviewSchema)

module.exports = ReviewModel