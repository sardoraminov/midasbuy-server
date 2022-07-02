const express = require("express")
const cors = require("cors")

const usersRouter = require("./routes/user.routes.js")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(usersRouter)

app.listen(8080, () => {
  console.log('server is running on 8080 port');
})