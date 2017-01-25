var mongoose = require('mongoose');

var skaterSchema = new mongoose.Schema({

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

  position: {
    type: String,
    required: true,
    unique: false
  },

  goals: {
    type: Number,
    required: true,
    unique: false,
    default: 0
  },

  assists: {
    type: Number,
    required: true,
    unique: false,
    default: 0
  },

  penaltyMinutes: {
    type: Number,
    required: true,
    unique: false,
    default: 0
  },

  shots: {
    type: Number,
    required: true,
    unique: false,
    default: 0
  },

  bio: {
    type: String,
    unique: false
  },

  picture: {
    type: String,
    unique: false
  }

});

module.exports = mongoose.model('Skater', skaterSchema);