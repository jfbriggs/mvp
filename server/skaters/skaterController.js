var Skater = require('./skaterModel.js');
var Q = require('q');

var findSkater = Q.nbind(Skater.findOne, Skater);
var createSkater = Q.nbind(Skater.create, Skater);
var getSkaters = Q.nbind(Skater.find, Skater);

module.exports = {


  // create a new skater object
  newSkater: function(req, res, next) {
    return createSkater(req.body)
    .then(function(skater) {
      if (skater) {
        res.json(skater);
      }
      next();
    })
    .fail(function(err) {
      next(error);
    });
  },


  getTeamSkaters: function(req, res, next) {
    var teamName = req.url.split("/")[3];
    teamName = teamName.replace(/%20/i, ' ');
    console.log('Getting team skaters for', teamName);
    getSkaters({'team': teamName})
    .then(function(skaters) {
        res.json(skaters);
    })
    .fail(function(err) {
      next(error);
    });
  }



// perhaps a delete skater option?

}