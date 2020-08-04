
angular.module('myApp', [
  'ngRoute',
  'myApp.formList',
  'myApp.forms'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider
  .when('/forms/:name', {
    url: "/forms",
    templateUrl: "forms/forms.html",
    controller: "formsCtrl"
  })

  $routeProvider.otherwise({redirectTo: '/formList'});
}]);