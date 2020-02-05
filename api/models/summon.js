const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  summontype: String,
  rarity: String,
  character: String,
  weapon: String,
  eventtype: String
});

module.exports = mongoose.model('Account', accountSchema);
