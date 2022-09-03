const jwt = require('jsonwebtoken');
const User = require('../model/userModel')

// User Athentication__________________________________
module.exports.authenticateUser = async (req, res, next) => {

    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1]
        const { _id, role } = jwt.decode(token, process.env.JWT_SECRET)
        const user = await User.findOne({ _id, role })
        if (user && role === "user") {
            req.user = user
            next()
        } else {
            res.status(403).json({ error: "User Access Denied" })
        }
    } else {
        res.status(403).json({ error: "Authentication Required!" })
    }

}

// Admin Athentication__________________________________
module.exports.authenticateAdmin = async (req, res, next) => {

    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1]
        const { _id, role } = jwt.decode(token, process.env.JWT_SECRET)
        const admin = await User.findOne({ _id, role })
        if (admin && role === "admin") {
            req.admin = admin
            next()
        } else {
            res.status(403).json({ error: "Admin Access Denied" })
        }
    } else {
        res.status(403).json({ error: "Authentication Required!" })
    }
}