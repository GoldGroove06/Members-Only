const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hello World!")
})

const PORT = 8000

app.listen(PORT, () => console.log("server started at PORT 8000"))