const express = require('express')
// const router = express.Router()
const app = express()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const summonsRoutes = require('./api/routes/summons')
// const cors = require('cors')

app.use(bodyparser.json())
app.use('/', summonsRoutes)
app.use(express.json());

mongoose.set('useUnifiedTopology', true)

mongoose.connect(
  { useNewUrlParser: true }
)

// app.use(cors())
//
// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// })
//
// app.listen(3000, function () {
//   console.log('CORS-enabled web server listening on port 3000')
// })

// const port = process.env.PORT|| 3000
//
// app.listen(port, () => {
//   console.log(`server on port ${port}`)
// })
