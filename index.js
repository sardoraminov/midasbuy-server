const express = require("express")
const cors = require("cors")
require('dotenv').config()

const usersRouter = require("./routes/user.routes.js")

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api", usersRouter);

app.get("/", (req, res) => {
  res.send("Hello")
})

app.listen(process.env.PORT, () => {
  console.log('server is running on 8080 port');
})