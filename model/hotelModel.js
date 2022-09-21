const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true
    },
    status: {
        default: 'Open',
        enum: ['Open', 'Close']
    },
    picture: String,
    facility: String,
    reviewId: String
})

const roomModel = mongoose.model("Room", roomSchema)
module.exports = roomModel