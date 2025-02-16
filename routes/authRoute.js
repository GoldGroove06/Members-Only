const {Router} = require("express")
const authRoute = Router()
const {getSignin, postSignin} = require("../controllers/SigninController")
const {getSignup, postSignup} = require("../controllers/SignupController")


authRoute.get("/signin", getSignin)
authRoute.post("/signin", postSignin)


authRoute.get("/signup", getSignup)
authRoute.post("/create-user", postSignup)

module.exports = authRoute