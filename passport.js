require("dotenv").config();
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const passport = require("passport");

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
    function (accessToken, refreshToken, profile, done) {
      console.log(profile._json); //* save it to db
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
