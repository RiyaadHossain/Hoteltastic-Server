const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        min: 3,
        max: 15
    }
})

const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel