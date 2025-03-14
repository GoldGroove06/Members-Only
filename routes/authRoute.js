const {Router} = require("express")
const authRoute = Router()
const passport = require("passport");
const {getSignin, postSignin} = require("../controllers/SigninController")
const {getSignup, postSignup} = require("../controllers/SignupController")
const { emailCheck } = require("../validators/createUserValidator")


authRoute.get("/signin", getSignin)
authRoute.post("/signin",  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/"
  }))


authRoute.get("/signup", getSignup)
authRoute.post("/create-user", emailCheck(), postSignup)

module.exports = authRoute