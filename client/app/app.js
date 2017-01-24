angular.module('myleague', [
  'myleague.overview',
  'myleague.teamview',
  'myleague.schedule',  
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
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
.run(function ($rootScope, $location) {
  
});