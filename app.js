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
  "mongodb+srv://uthor123:orianna666@cluster0-hnegv.mongodb.net/test?retryWrites=true&w=majority",
  { useUnifiedTopology: true }
)

const port = process.env.PORT|| 3000

app.listen(port, () => {
  console.log(`server on port ${port}`)
})

// module.exports = router
