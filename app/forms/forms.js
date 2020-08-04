angular.module('myApp.forms', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forms', {
    templateUrl: 'forms/forms.html',
    controller: 'formsCtrl'
  });
}])

.controller('formsCtrl',   function($scope, $routeParams, $location) {
  $scope.liste = [];
  $scope.form = {};
  
  // parametreyi yakala ve localstoragetan kayıtları çekip filtrele. NOT: aynı form isminde birden fazla kayıt varsa ilk kaydı getirir bu çalışma prensibi.
  var param = $routeParams.name;
  $scope.name = param;
  $scope.liste = JSON.parse(window.localStorage.StorageForms);
  $scope.form = $scope.liste.filter(f => f.name === param)[0];
});
  