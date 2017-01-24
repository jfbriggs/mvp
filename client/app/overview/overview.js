angular.module('myleague.overview', [])

.controller('OverviewController', function ($scope, $location) {

    // Your code here
    $scope.data = { teams: [] };

    var init = function() {
      Team.getAll()
        .then(function(teams) {
          console.log('Team collection:', teams);
          if (links) {
            teams.forEach(function(team) {
              $scope.data.teams.push(team);
            });
          }
        });
    };

    init();


});