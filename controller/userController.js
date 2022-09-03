const User = require("../model/userModel")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// SignIn Controller_____________________
module.exports.signUp = async (req, res) => {

    let avatar;
    const { name, email, password, picture, paymentId, reviewId } = req.body
    if(req.file) avatar = process.env.BASE_URL + req.file.filename
    const userExist = await User.findOne({ email })

    if (userExist) {
        res.status(400).json({ error: "Email Already Exist!" })
    } else {

        const hash_password = await bcrypt.hash(password, 10)
        const newUser = new User({ name, email, hash_password, picture, paymentId, avatar, reviewId, role: "user" })

        try {
            const user = await newUser.save()
            res.status(200).json({ message: "User Signed Up successfully.", user })
        } catch (error) {
            res.status(500).json({ error })
        }
    }

}

// SignIn Controller_____________________
module.exports.signIn = async (req, res) => {

    const { email, password } = req.body
    const user = await User.findOne({ email })

    try {
        if (user) {
            const passwordCorrect = await bcrypt.compare(password, user.hash_password)
            const { _id, role } = user
            if (passwordCorrect) {
                const token = jwt.sign({ _id, role }, process.env.JWT_SECRET)
                res.status(200).json({ message: "User SignIn Successfully.", token, user })
            } else {
                res.status(500).json({ error: "Authentication Failed!" })
            }

        } else {
            res.status(500).json({ error: "User Not found!" })
        }

    } catch (error) {
        res.status(500).json({ error })
    }
}