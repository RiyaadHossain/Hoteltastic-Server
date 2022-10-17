const Payment = require('../model/paymentModel')
const stripe = require('stripe')("sk_test_51L1DNCDSQhYM6brtoMFOGMzlwOkAL4vMvS1iUf1hpgqbGQz6gPhwCHZaBnj5UGvxHB0CSFU0kfNkqZNVVzWMM5xt00ZJLYCB03")

// -----------------Posting booking/payment infoo controller---------------------------------
module.exports.payment = async (req, res) => {
	let { amount, payment, tnxID, name, email, day } = req.body
	try {
		const paymentInfo = await stripe.paymentIntents.create({
			amount: amount,
			currency: 'usd',
			automatic_payment_methods: {
				enabled: true,
			},
		})
		const newPayment = new Payment(req.body)
		const paymentData = await newPayment.save()
		res.json({
			message: 'Payment successful',
			success: true,
			paymentData,
		})
	} catch (error) {
		console.log(error);
		res.json({
			message: 'Payment failed',
			error: error.message,
		})
	}
}

// ------------------for gettting all the payment info--------------------

module.exports.getAllBooking = async (req, res) => {
	try {
		const allBooking = await Payment.find({})
		res.status(200).json({ allBooking })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

// --------------------Deleting a single payment booked item-------------------------------

// Delete Review Controller____________________
module.exports.deleteBooking = async (req, res) => {
	const { id } = req.params

	try {
		await Payment.findByIdAndDelete({ _id: id })
		res.status(201).json({ message: 'Your Booking info is Deleted.' })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

// --------------------updating aa single booking info-----------------------------------

// Update Review Controller____________________
module.exports.updateBookingStatus = async (req, res) => {
	const { id } = req.params
	const updatedBooking = req.body

	try {
		const result = await Payment.findByIdAndUpdate(
			{ _id: id },
			{
				$set: updatedBooking,
			}
			// { new: true }
		)
		res.status(201).json({ message: 'Your Review is Updated.', result })
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}
