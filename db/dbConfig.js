const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));