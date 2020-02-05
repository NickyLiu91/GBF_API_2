const express = require('express')
// const router = express.Router()
const app = express()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const summonsRoutes = require('./api/routes/summons')
app.use(bodyparser.json())
app.use('/', summonsRoutes)
app.use(express.json());

mongoose.set('useUnifiedTopology', true)

mongoose.connect(
  { useNewUrlParser: true }
)

const port = process.env.PORT|| 3000

app.listen(port, () => {
  console.log(`server on port ${port}`)
})

// module.exports = router
