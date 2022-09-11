const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5001; //* personal port change (sadik)
const app = express();
const passport = require("passport");
const passportSetup = require("./passport");
const cookieSession = require("cookie-session");
dotenv.config();

// Local Middlewares
const userRoute = require("./route/userRoute");
const adminRoute = require("./route/adminRoute");
const hotelRoute = require("./route/hotelRoute");
const reviewRoute = require("./route/reviewRoute");
const paymentRoute = require("./route/paymentRoute");
const socialRoute = require("./route/socialRoute");
const emailRoute = require("./route/emailRoute");
// Third-party Middlewares
app.use(bodyParser.json());
app.use(express.static("uploads"));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", //* clients url
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(
  cookieSession({
    name: "session",
    keys: ["sadik"],
  })
);

app.use(passport.initialize());
app.use(passport.session());
// DB Confiq
require("./db/dbConfig");

// Local Middlewares
app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/room", hotelRoute);
app.use("/api/review", reviewRoute);
app.use("/api/payment", paymentRoute);
app.use("/auth", socialRoute);
app.use("/api/email", emailRoute);

// Health Check
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express server." });
});

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
