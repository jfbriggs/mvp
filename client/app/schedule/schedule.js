angular.module('myleague.schedule', [])

.controller('ScheduleController', function ($scope, $route, $location, Games, Teams) {

   $scope.data = { games: [], teams: [] };

    var init = function() {

      Games.getAll()
        .then(function(games) {
          console.log('Game collection:', games);
          if (games) {
            games.forEach(function(game) {
              game.date = game.date.slice(0, 10);
              $scope.data.games.push(game);

              sortSchedule();
            });
          }
        });

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

    $scope.newGame = {};

    $scope.addGame = function() {
      console.log('Game being added:', $scope.newGame);

      Games.addGame($scope.newGame).then(function(resp) {
        $scope.data.games = [];
        $scope.data.teams = [];
        init();
        console.log(resp);
        $scope.showGameForm();
      });

      $scope.newGame = {};

    };

    $scope.showGameForm = function() {
      $('.game-form').toggle();
      $('#add-game').toggle();
    }

    var sortSchedule = function(scope) {
      $scope.data.games.sort(function(a, b) { 
        if (a.date < b.date) {
          return -1;
        } else if (a.date > b.date) {
          return 1;
        } else {
          // sort by time
          if (a.time < b.time) {
            return -1;
          } else if (a.time > b.time) {
            return 1;
          } else {
            return 0;
          }
        }
      });
    }

    init();

});