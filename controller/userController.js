const User = require("../model/userModel")
const bcrypt = require('bcrypt');

// SignIn Controller_____________________
module.exports.signUp = async (req, res) => {

    const { name, email, password, picture, paymentId, reviewId } = req.body

    const userExist = await User.findOne({ email })

    if (userExist) {
        res.status(400).json({ error: "Email Already Exist!" })
    } else {

        const hash_password = await bcrypt.hash(password, 10)
        const newUser = new User({ name, email, hash_password, picture, paymentId, reviewId })

        try {
            const result = await newUser.save()
            res.status(200).json({ message: "User Signed Up successfully.", result })
        } catch (error) {
            res.status(500).json({ error })
        }
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