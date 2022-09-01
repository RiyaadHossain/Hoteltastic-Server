const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    userId: String,
    payment: {
        type: Boolean,
        enum: [true, false]
    }
})

const paymentModel = mongoose.model("Payment", paymentSchema)

module.exports = paymentModel