const express = require("express")
const app = express()
const authRoute = require("./routes/authRoute")
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("Homepage")
})

app.use("/auth", authRoute)

const PORT = 8000

app.listen(PORT, () => console.log("server started at PORT 8000"))