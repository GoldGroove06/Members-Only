const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const db = require("../db/queries");

passport.use(
    new LocalStrategy(
      { usernameField: "email" }, // Use email instead of username
      async (email, password, done) => {
        try {
          const user = await db.getUser(email);
          if (!user) return done(null, false, { message: "No user found" });
  
          const isMatch = await bcrypt.compare(password, user[0].password);
          if (!isMatch) return done(null, false, { message: "Incorrect password" });
  
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );
  

  passport.serializeUser((user, done) => {
    done(null, user.email);
  });
  

  passport.deserializeUser(async (email, done) => {
    try {
      const user = await db.getUser(email);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });