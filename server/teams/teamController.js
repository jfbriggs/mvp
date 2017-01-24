var Team = require('./teamModel.js');
var Q = require('q');

var findTeam = Q.nbind(Team.findOne, Team);
var createTeam = Q.nbind(Team.create, Team);
var getAllTeam = Q.nbind(Team.find, Team);

module.exports = {


  // create a new game object
  newTeam: function(req, res, next) {
    return createTeam(req.body)
    .then(function(team) {
      if (team) {
        res.json(team);
      }
      next();
    })
    .fail(function(err) {
      next(error);
    });
  },


  allTeams: function(req, res, next) {
    getAllTeam({})
    .then(function(teams) {
        res.json(teams);
    })
    .fail(function(err) {
      next(error);
    });
  }



// perhaps a delete team option?

}