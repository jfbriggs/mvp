angular.module('myleague.teamview', [])

.controller('TeamViewController', function ($scope, $route, $location, Skaters, Goalies, Teams) {

  $scope.data = { skaters: [], goalies: [] };
  $scope.currentTeam = $location.$$path.split("/")[2];

  var init = function() {

    var currentTeam = $location.$$path.split("/")[2];

    Skaters.getTeam(currentTeam)
      .then(function(skaters) {
        console.log('Skaters collection:', skaters);
        if (skaters) {
          skaters.forEach(function(skater) {
            skater.points = skater.goals + skater.assists;
            $scope.data.skaters.push(skater);
          });
        }
      });

    Goalies.getTeam(currentTeam)
      .then(function(goalies) {
        console.log('Goalies collection:', goalies);
        if (goalies) {
          goalies.forEach(function(goalie) {
            $scope.data.goalies.push(goalie);
          });
        }
      });

    Teams.getOne(currentTeam)
      .then(function(teamData) {
        console.log('current team data:', teamData[0]);
        if (teamData) {
          $scope.data.teamInfo = teamData[0];
        }
      });
  }

  $scope.showSkaterForm = function() {
    $('#add-skater').toggle();
    $('#add-goalie').toggle();
    $('.skater-form').toggle();
  };

  $scope.showGoalieForm = function() {
    $('.goalie-form').toggle();
    $('#add-goalie').toggle();
    $('#add-skater').toggle();
  }

  init();

});

