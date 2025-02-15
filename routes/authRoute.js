const {Router} = require("express")
const authRoute = Router()
const {getSignin} = require("../controllers/SigninController")
const {getSignup} = require("../controllers/SignupController")


authRoute.get("/signin", getSignin)
authRoute.get("/signup", getSignup)

module.exports = authRoute