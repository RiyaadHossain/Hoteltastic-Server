const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        min: 3,
        max: 15,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    hash_password: {
        type: String,
        trim: true,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    picture: String,
    paymentId: String,
    reviewId: String,

})

const UserModel = mongoose.model("User", userSchema)

module.exports = UserModel