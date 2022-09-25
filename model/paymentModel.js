const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
	tnxID: String,
	name: String,
	email: String,
	day: String,
	amount: Number,
	payment: {
		type: Boolean,
		enum: [true, false],
	},
	roomID: String,
	roomName: String,
})

const paymentModel = mongoose.model('Payment', paymentSchema)

module.exports = paymentModel
