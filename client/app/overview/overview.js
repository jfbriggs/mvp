angular.module('myleague.overview', [])

.controller('OverviewController', function ($scope, $location, $route, Teams) {

    // Your code here
    $scope.data = { teams: [] };

    var init = function() {
      Teams.getAll()
        .then(function(teams) {
          console.log('Team collection:', teams);
          if (teams) {
            teams.forEach(function(team) {
              $scope.data.teams.push(team);
            });
          }
        });
    };

    init();


});