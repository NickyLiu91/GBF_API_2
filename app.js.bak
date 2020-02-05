const express = require('express')
// const router = express.Router()
const app = express()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const summonsRoutes = require('./api/routes/summons')
app.use(bodyparser.json())
app.use('/', summonsRoutes)
app.use(express.json());

mongoose.connect(
  "mongodb+srv://uthor123:<password>@cluster0-hnegv.mongodb.net/test?retryWrites=true&w=majority",
  {useNewUrlParser: true}
)

const port = process.env.PORT|| 3000

app.listern(port, () => {
  console.log(`server on port ${port}`)
})
