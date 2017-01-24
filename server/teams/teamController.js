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
  },

  oneTeam: function(req, res, next) {
    var teamName = req.url.split("/")[3];
    teamName = teamName.replace(/%20/i, ' ');
    getAllTeam({'name': teamName})
    .then(function(teamInfo) {
      res.json(teamInfo);
    })
    .fail(function(err) {
      next(err);
    });
  }


// perhaps a delete team option?

}