var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  division: {
    type: String,
    required: true,
    unique: false
  },

  wins: {
    type: Number,
    required: true,
    unique: false,
    default: 0
  },

  losses: {
    type: Number,
    required: true,
    unique: false,
    default: 0
  },

  ties: {
    type: Number,
    required: true,
    unique: false,
    default: 0
  },

  points: {
    type: Number,
    required: true,
    unique: false,
    default: 0
  },

  logo: {
    type: String,
    required: false,
    unique: false
  }

});

module.exports = mongoose.model('Team', teamSchema);