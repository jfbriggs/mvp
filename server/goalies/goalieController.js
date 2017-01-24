var Goalie = require('./goalieModel.js');
var Q = require('q');

var findGoalie = Q.nbind(Goalie.findOne, Goalie);
var createGoalie = Q.nbind(Goalie.create, Goalie);
var getGoalies = Q.nbind(Goalie.find, Goalie);

module.exports = {

  // create a new goalie object
  newGoalie: function(req, res, next) {
    return createGoalie(req.body)
    .then(function(goalie) {
      if (goalie) {
        res.json(goalie);
      }
      next();
    })
    .fail(function(err) {
      next(error);
    });
  },


  getTeamGoalies: function(req, res, next) {
    var teamName = req.url.split("/")[3];
    teamName = teamName.replace(/%20/i, ' ');
    console.log('Getting team goalies for', teamName);
    getGoalies({'team': teamName})
    .then(function(goalies) {
        res.json(goalies);
    })
    .fail(function(err) {
      next(error);
    });
  }



// perhaps a delete skater option?

}