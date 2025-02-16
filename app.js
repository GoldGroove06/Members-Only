const express = require("express")
const bodyParser = require('body-parser');
const authRoute = require("./routes/authRoute")
const path = require("node:path");


const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("Homepage")
})

app.use("/auth", authRoute)

const PORT = 8000

app.listen(PORT, () => console.log("server started at PORT 8000"))