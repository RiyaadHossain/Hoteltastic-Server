const mongoose = require('mongoose');
const { Schema } = mongoose;

const favouriteSchema = mongoose.Schema({
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

const favouriteModel = mongoose.model("Favourite", favouriteSchema)
module.exports = favouriteModel