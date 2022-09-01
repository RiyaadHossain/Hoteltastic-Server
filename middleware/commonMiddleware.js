const jwt = require('jsonwebtoken');
const User = require('../model/userModel')

// User Athentication__________________________________
module.exports.authenticateUser = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    const { _id, role } = jwt.decode(token, process.env.JWT_SECRET)
    const user = await User.findOne({ _id, role })
    if (user && role === "user") {
        next()
    } else {
        res.status(403).json({ error: "User Access Denied" })
    }
}

// Admin Athentication__________________________________
module.exports.authenticateAdmin = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1]
    const { _id, role } = jwt.decode(token, process.env.JWT_SECRET)
    const user = await User.findOne({ _id, role })
    if (user && role === "admin") {
        res.send(user)
        next()
    } else {
        res.status(403).json({ error: "Admin Access Denied" })
    }
}