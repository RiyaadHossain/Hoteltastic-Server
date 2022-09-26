const jwt = require('jsonwebtoken');
const User = require('../model/userModel')

// User Athentication__________________________________
module.exports.authenticateUser = async (req, res, next) => {
    console.log(req.headers)
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1]
        const credentials = jwt.decode(token, process.env.JWT_SECRET)
        if (credentials) {
            const user = await User.findOne({ _id: credentials._id, role: credentials.role })
            if (user && credentials.role === "User") {
                req.user = user
                next()
            } else {
                res.status(403).json({ error: "User Access Denied" })
            }
        } else {
            res.status(403).json({ error: "Authentication Required!" })
        }
    } else {
        res.status(403).json({ error: "Authentication Required!" })
    }

}

// Admin Athentication__________________________________
module.exports.authenticateAdmin = async (req, res, next) => {

    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1]
        const credentials = jwt.decode(token, process.env.JWT_SECRET)
        if (credentials) {
            const admin = await User.findOne({ _id: credentials._id, role: credentials.role })
            if (admin && credentials.role === "Admin") {
                req.admin = admin
                next()
            } else {
                res.status(403).json({ error: "Admin Access Denied" })
            }
        } else {
            res.status(403).json({ error: "Authentication Required!" })
        }
    } else {
        res.status(403).json({ error: "Authentication Required!" })
    }
}