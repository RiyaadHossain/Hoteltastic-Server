const Payment = require('../model/paymentModel')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports.payment = async (req, res) => {
	console.log(req.body, 'boody posting')
	let { amount, id, payment } = req.body
	console.log(req.body)
	try {
		const paymentInfo = await stripe.paymentIntents.create({
			amount,
			// payment,
			currency: 'usd',
			description: 'Hotel Room',
			automatic_payment_methods: {
				enabled: true,
			},
			// payment_method_types: ['card'],
			// confirm: true,
			// payment,
		})
		const newPayment = new Payment(paymentInfo)
		console.log('Payment', payment)
		const paymentData = await newPayment.save()
		res.json({
			message: 'Payment successful',
			success: true,
		})
	} catch (error) {
		console.log('Error', error.message)
		res.json({
			message: 'Payment failed',
			success: false,
		})
	}
}
