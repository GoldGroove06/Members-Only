const express = require("express")
const bodyParser = require('body-parser');
const authRoute = require("./routes/authRoute")
const path = require("node:path");
const passport = require("passport");
const session = require("express-session");


const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render("Homepage")
})

app.use("/auth", authRoute)

const PORT = 8000

app.listen(PORT, () => console.log("server started at PORT 8000"))