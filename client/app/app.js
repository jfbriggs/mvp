angular.module('myleague', [
  'myleague.overview',
  'myleague.teamview',
  'myleague.schedule',  
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/overview', {
      templateUrl: 'app/overview/overview.html',
      controller: 'OverviewController'
    })
    .when('/schedule', {
      templateUrl: 'app/schedule/schedule.html',
      controller: 'ScheduleController'
    })
    .when('/teamview', {
      templateUrl: 'app/teamview/teamview.html',
      controller: 'TeamViewController'
    })
    .otherwise({
      redirectTo: '/overview'
    });

})
.factory('Teams', function($http) {

  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/teams'
    })
    .then(function(resp) {
      console.log('Response data:', resp.data);
      return resp.data;
    });
  };

  return {
    getAll: getAll
  };

})
.factory('Games', function($http) {

  var getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/games'
    })
    .then(function(resp) {
      console.log('Games data:', resp.data);
      return resp.data;
    });
  };

  var addGame = function(gameObj) {
    return $http({
      method: 'POST',
      url: '/api/games',
      data: gameObj
    })
    .then(function(resp) {
      return resp.data;
    });
  }

  return {
    getAll: getAll,
    addGame: addGame
  };


})