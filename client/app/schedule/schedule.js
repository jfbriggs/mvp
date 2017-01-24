angular.module('myleague.schedule', [])

.controller('ScheduleController', function ($scope, $route, $location, Games) {

   $scope.data = { games: [] };

    var init = function() {
      console.log('Games!');
      Games.getAll()
        .then(function(games) {
          console.log('Game collection:', games);
          if (games) {
            games.forEach(function(game) {
              game.date = game.date.slice(0, 10);
              $scope.data.games.push(game);
            });
          }
        });
    };

    init();

});