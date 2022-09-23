module.exports.payment = async (req, res) => {
	console.log(req.body)
	let { amount, id, payment } = req.body
	try {
		const paymentInfo = await stripe.paymentIntents.create({
			amount,
			payment,
			currency: 'USD',
			description: 'Hotel Room',
			payment_method: id,
			confirm: true,
			payment,
		})
		console.log('Payment', payment)
		res.json({
			message: 'Payment successful',
			success: true,
		})
	} catch (error) {
		console.log('Error', error)
		res.json({
			message: 'Payment failed',
			success: false,
		})
	}
}
