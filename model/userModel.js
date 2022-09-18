const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    min: 3,
    max: 15,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  hash_password: {
    type: String,
    trim: true,
  },
  role: {
    type: String,
    enum: ["User", "Admin"],
    default: "User",
  },
  avatar: String,
  paymentId: String,
  reviewId: String,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
