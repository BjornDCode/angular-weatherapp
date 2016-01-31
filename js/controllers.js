// Initialize Angular app
var firstApp = angular.module('firstApp', []);

// Create controller
firstApp.controller('firstCtrl', function($scope, $http){

  // Variables for sorting the table
  $scope.sortMode = "name";
  $scope.reverseSort = false;

  // HTTP request to openweathermap.org
  $http({
    method: 'GET',
    url: 'http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743,2988507,2950159,3117735,2618425,2267057&units=metric&appid=44db6a862fba0b067b1930da0d769e98'
  }).then(function succesCallback(response) {
    $scope.data = response.data.list;
  }, function failCallback(response) {

  });

});
