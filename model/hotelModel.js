const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    propertyName: {
        type: String,
        required: true,
        trim: true
    },
    propertyDesciption: {
        type: String,
        required: true,
        trim: true
    },
    startFrom: {
        type: Number,
        required: true,
        trim: true
    },
    propertyImage: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Open',
        enum: ['Open', 'Close']
    },
    authorName: String,
    favorite: String,
    sqFt: String,
    beds: String,
})

const roomModel = mongoose.model("Room", roomSchema)
module.exports = roomModel