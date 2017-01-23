// == DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

// == CREATE APP
var app = express();

// == CONNECT TO MONGO W/ MONGOOSE
mongoose.connect('mongodb://localhost/myleague');

// == DEFINE PORT
var port = process.env.PORT || 3000;

// == MIDDLEWARE

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + '/client')));


// == ROUTES


// == LISTEN TO PORT
app.listen(port, function() {
  console.log('Now listening on port', port);
});

// EXPORT APP
module.exports = app;