const express = require('express')
const path = require('path')
const app = express()

require('./routes/videos')(app)

app.use(express.static("build"))
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")))

app.listen(5000, () => console.log("listening..."))