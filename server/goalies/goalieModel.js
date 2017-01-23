var mongoose = require('mongoose');

var goalieScheme = new mongoose.Schema({

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

  savePct: {
    type: Number,
    required: true,
    unique: false
  },

  goalsAA: {
    type: Number,
    required: true,
    unique: false
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