var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema ({

  homeTeam: {
    type: String,
    required: true,
    unique: false
  },

  vistingTeam: {
    type: String,
    required: true,
    unique: false
  },

  date: {
    type: Date,
    required: true,
    unique: false
  },

  time: {
    type: String,
    required: true,
    unique: false
  },

  outcome: {
    type: String,
    default: 'TBD',
    unique: false
  }

});

module.exports = mongoose.model('Game', gameSchema);