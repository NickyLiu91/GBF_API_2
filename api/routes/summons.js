const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

const Summon = require('../models/summon')

const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyparser.json())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})

app.get("/api/summons", (req, res) => {
  Summon.find()
  .exec()
  .then(docs => {
    console.log(docs)
    res.status(200).json(docs)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({
      error: err
    })
  })
  // res.json({
  //   status: 'API ITS WORKING',
  //   message: '???????????'
  // })
})

app.get("/api/summons/:id", (req, res) => {
  const id = req.params.id
  Summon.findById(id)
  .exec()
  .then(doc => {
    console.log(doc)
    if (doc) {
      res.status(200).json(doc)
    } else {
      res.status(404).json({message: 'No valid entry found for provided ID'})
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).son({error: err})
  })
})

app.post("/api/summons", (req, res) => {
  const summon = new Summon({
    _id: new mongoose.Types.ObjectId(),
    summontype: req.body.summontype,
    rarity: req.body.rarity,
    character: req.body.character,
    weapon: req.body.weapon,
    eventtype: req.body.eventtype
  })
  summon.save()
  .then(result => {
    console.log(result)
    res.status(201).json({
      message: "Handling POST requests to /summons",
      createdSummon: summon
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({
      error: err
    })
  });
})

module.exports = router
