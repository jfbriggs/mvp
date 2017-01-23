var mongoose = require('mongoose');

var teamSchema - new mongoose.Schema({
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
    unique: false
  },

  losses: {
    type: Number,
    required: true,
    unique: false
  },

  ties: {
    type: Number,
    required: true,
    unique: false
  },

  gamesPlayed: {
    type: Number,
    required: true,
    unique: false
  },

  points: {
    type: Number,
    required: true,
    unique: false
  },

  logo: {
    type: String,
    required: false,
    unique: false
  }

});