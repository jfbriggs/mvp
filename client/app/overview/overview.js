angular.module('myleague.overview', [])

.controller('OverviewController', function ($scope, $location, $route, Teams) {

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

    $scope.newTeam = {};

    $scope.addTeam = function() {
      console.log('adding team!');

      var points = +$scope.newTeam.wins * 2 + +$scope.newTeam.ties;
      console.log('Points calculated', points);

      $scope.newTeam.points = points;
      Teams.addTeam($scope.newTeam).then(function(resp) {
        $scope.data.teams = [];
        init();
        console.log(resp);
      });

      $scope.newTeam = {};
    };

    $scope.showTeamForm = function() {
      $('.team-form').toggle();
      $('#add-team').toggle();
    };


    init();


});