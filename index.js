const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000
const app = express()

// Local Middlewares
const userRoute = require("./route/userRoute")
const adminRoute = require("./route/adminRoute")

// Third-party Middlewares
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded())

// Local Middlewares
app.use("/api/user", userRoute)
app.use("/api/admin", adminRoute)

// DB Confiq
require("./db/dbConfig")

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
