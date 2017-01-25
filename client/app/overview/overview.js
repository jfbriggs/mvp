angular.module('myleague.overview', [])

.controller('OverviewController', function ($scope, $location, $route, Teams) {

    $scope.data = { teams: {} };

    var init = function() {
      Teams.getAll()
        .then(function(teams) {
          console.log('Team collection:', teams);
          if (teams) {
            $scope.data.teams = sortByDivision(teams);
          }
        });
    };

    $scope.newTeam = {};

    $scope.addTeam = function() {
      console.log('adding team!');

      // set games played to 0 if no wins, losses, & ties
      if (!$scope.newTeam.wins && !$scope.newTeam.losses && !$scope.newTeam.ties) {
        $scope.newTeam.gamesPlayed = 0;
      } else {
        $scope.newTeam.gamesPlayed = Number($scope.newTeam.wins) + Number($scope.newTeam.losses) + Number($scope.newTeam.ties);
      }

      // set points to 0 if no games played
      if (!$scope.newTeam.gamesPlayed) {
        $scope.newTeam.points = 0;
      } else {
        $scope.newTeam.points = Number($scope.newTeam.wins) * 2 + Number($scope.newTeam.ties);
      }

      Teams.addTeam($scope.newTeam).then(function(resp) {
        $scope.data.teams = [];
        init();
        console.log(resp);
        $scope.showTeamForm();
      });

      $scope.newTeam = {};
    };

    $scope.showTeamForm = function() {
      $('.team-form').toggle();
      $('#add-team').toggle();
    };



    var sortByDivision = function(teams) {
      var divisions = {};

      teams.forEach(function(team) {
        if (divisions[team.division]) {
          divisions[team.division].push(team);
        } else {
          divisions[team.division] = [team];
        }
      });

      for (division in divisions) {
        divisions[division].sort(function(a, b) {
          if (a.points === b.points) {
            return 0;
          }
          return b.points < a.points ? -1 : 1;
        });
      }

      return divisions;
    };

    init();

});