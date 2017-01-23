var Game = require('./gameModel.js');
var Q = require('q');

var findGame = Q.nbind(Game.findOne, Game);
var createGame = Q.nbind(Game.create, Game);
var getAllGames = Q.nbind(Game.find, Game);

module.exports = {


  // create a new game object
  newGame: function(req, res, next) {
    return createGame(req.body)
    .then(function(game) {
      if (game) {
        res.json(game);
      }
      next();
    })
    .fail(function(err) {
      next(error);
    });
  },


  allGames: function(req, res, next) {
    getAllGames({})
    .then(function(games) {
        res.json(games);
    })
    .fail(function(err) {
      next(error);
    });
  }



// perhaps a delete game option?

}