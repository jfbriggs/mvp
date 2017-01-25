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
    .when('/teamview/:teamid', {
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

  var getOne = function(team) {
    return $http({
      method: 'GET',
      url: '/api/teams/' + team
    })
    .then(function(resp) {
      console.log('Response data:', resp.data);
      return resp.data;
    });
  }

  var addTeam = function(teamObj) {
    return $http({
      method: 'POST',
      url: 'api/teams',
      data: teamObj
    })
    .then(function(resp) {
      return resp.data;
    });
  }

  return {
    getAll: getAll,
    addTeam: addTeam,
    getOne: getOne
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
.factory('Skaters', function($http) {

  var getTeam = function(team) {
    return $http({
      method: 'GET',
      url: '/api/skaters/' + team
    })
    .then(function(resp) {
      return resp.data;
      console.log('Retrieved skaters for URL:', '/api/goalies/' + team);
    });
  };

  var addSkater = function(skater) {
    console.log('submitting skater!', skater);
    return $http({
      method: 'POST',
      url: '/api/skaters/',
      data: skater
    })
    .then(function(resp) {
      return resp.data;
      console.log('Submitted skater!');
    });
  }

  return {
    getTeam: getTeam,
    addSkater: addSkater
  };

})
.factory('Goalies', function($http) {

  var getTeam = function(team) {
    return $http({
      method: 'GET',
      url: '/api/goalies/' + team
    })
    .then(function(resp) {
      return resp.data;
      console.log('Retrieved goalies for URL:', '/api/goalies/' + team);
    });
  };
  
  var addGoalie = function(goalie) {
    return $http({
      method: 'POST',
      url: '/api/goalies/',
      data: goalie
    })
    .then(function(resp) {
      return resp.data;
    });
  }

  return {
    getTeam: getTeam,
    addGoalie: addGoalie
  };

});