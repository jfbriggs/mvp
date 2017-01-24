var mongoose = require('mongoose');

var goalieSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    unique: false
  },

  team: {
    type: String,
    required: true,
    unique: false
  },

  number: {
    type: Number,
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

  savePct: {
    type: Number,
    required: true,
    unique: false,
    default: .000
  },

  goalsAA: {
    type: Number,
    required: true,
    unique: false,
    default: 0.00
  },

  bio: {
    type: String,
    required: false,
    unique: false
  },

  picture: {
    type: String,
    required: false,
    unique: false
  }

});

module.exports = mongoose.model('Goalie', goalieSchema);