// == DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

// == CONTROLLER DEPENDENCIES

var gameController = require('./games/gameController.js');
var goalieController = require('./goalies/goalieController.js');
var skaterController = require('./skaters/skaterController.js');
var teamController = require('./teams/teamController.js');


// == CREATE APP
var app = express();

// == CONNECT TO MONGO W/ MONGOOSE
mongoose.connect('mongodb://localhost/myleague');

// == DEFINE PORT
var port = 3000;

// == MIDDLEWARE

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client'));


// == ROUTES

// Teams
app.get('/api/teams', teamController.allTeams);

app.post('/api/teams', teamController.newTeam); 

app.get('/api/teams/:teamid', function(req, res) {

});

// Games

app.get('/api/games', gameController.allGames);

app.post('/api/games', gameController.newGame);

app.get('/api/games/:gameid', function(req, res) {

});

// Skaters

app.get('/api/skaters', function(req, res) {
  res.send('HERE ARE THE SKATERS!');
});

app.post('/api/skaters', function(req, res) {
});

app.get('/api/skaters/:skaterid', function(req, res) {

});

// Goalies

app.get('/api/goalies', function(req, res) {

});

app.post('/api/goalies', function(req, res) {

});

app.get('/api/goalies/:goalieid', function(req, res) {

});


// == LISTEN TO PORT
app.listen(port, function() {
  console.log('Now listening on port', port);
});

// EXPORT APP
module.exports = app;