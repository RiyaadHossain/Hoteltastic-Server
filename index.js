const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000
const app = express()

dotenv.config()

// Local Middlewares
const userRoute = require("./route/userRoute")
const adminRoute = require("./route/adminRoute")
const hotelRoute = require("./route/hotelRoute")
const reviewRoute = require("./route/reviewRoute")
const paymentRoute = require("./route/paymentRoute")

// Third-party Middlewares
app.use(bodyParser.json())
app.use(express.static("uploads"))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

// DB Confiq
require("./db/dbConfig")

// Local Middlewares
app.use("/api/user", userRoute)
app.use("/api/admin", adminRoute)
app.use("/api/room", hotelRoute)
app.use("/api/review", reviewRoute)
app.use("/api/payment", paymentRoute)

// Health Check
app.get("/", (req, res) => {
    res.json({message: "Hello from Express server."})
})

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
