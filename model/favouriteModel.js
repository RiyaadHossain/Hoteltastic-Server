const mongoose = require('mongoose');
const { Schema } = mongoose;

const favouriteSchema = mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'Room'
    }
})

const favouriteModel = mongoose.model("Favourite", favouriteSchema)
module.exports = favouriteModel