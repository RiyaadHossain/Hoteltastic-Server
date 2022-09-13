require("dotenv").config();
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const passport = require("passport");
const UserModel = require("./model/userModel");

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;

const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"], //test
    },
    function async(accessToken, refreshToken, profile, done) {
      const { name, email, picture } = profile._json;
      const newUser = new UserModel({ name, email, avatar: picture });
      try {
        const data = newUser.save();
        res.status(200).json({ message: "sign in success", result: data });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      console.log({ name: name, email: email, picture: picture }); //* save it to db
      done(null, profile);
    }
  )
);

//* cookie serialization purpose
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
