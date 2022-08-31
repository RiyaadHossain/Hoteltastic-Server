const User = require("../model/userModel")
const bcrypt = require('bcrypt');

// SignIn Controller_____________________
module.exports.signUp = async (req, res) => {

    const { name, email, password, picture, paymentId, reviewId } = req.body
    const hash_password = await bcrypt.hash(password, 10)

    const newUser = new User({ name, email, hash_password, picture, paymentId, reviewId })

    try {
        const result = await newUser.save()
        res.status(200).json({ result })
    } catch (error) {
        res.status(500).json({ error })
    }

}

// SignIn Controller_____________________
module.exports.signIn = async (req, res) => {

    const { email, password } = req.body
    

    try {
        res.status(200).json({})
    } catch (error) {
        res.status(500).json({ error })
    }
}