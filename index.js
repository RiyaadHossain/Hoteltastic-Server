const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000

const app = express()

// Third-party Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

// Local Middlewares
// app.use()

// DB Confiq
require("./db/dbConfig")

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
