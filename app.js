const express = require("express")
const bodyParser = require('body-parser');
const authRoute = require("./routes/authRoute")
const path = require("node:path");
const passport = require("passport");
const session = require("express-session");
require("./config/passport");

const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");



app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    console.log(req.user)
    res.render("Homepage",  { user: req.user })
})

app.get("/log-out", (req, res, next) => {
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect("/");
    });
  });

app.use("/auth", authRoute)

const PORT = 8000

app.listen(PORT, () => console.log("server started at PORT 8000"))