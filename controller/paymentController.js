const Payment = require('../model/paymentModel')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

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
		res.json({
			message: 'Payment failed',
			success: false,
		})
	}
}
