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
    unique: false
  },

  assists: {
    type: Number,
    required: true,
    unique: false
  },

  penaltyMinutes: {
    type: Number,
    required: true,
    unique: false
  },

  shots: {
    type: Number,
    required: true,
    unique: false
  },

  bio: {
    type: String,
    required: true,
    unique: false
  },

  picture: {
    type: String,
    required: false,
    unique: false
  }

});