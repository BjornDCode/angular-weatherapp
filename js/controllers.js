// Initialize Angular app
var firstApp = angular.module('firstApp', ['firstApp.api']);

// Create controller
firstApp.controller('firstCtrl', ['$scope', '$http', '$q','api', function($scope, $http, $q, api){

  // Variables for sorting the table
  $scope.sortMode = "name";
  $scope.reverseSort = false;


  // Resolve promise
  api.then(function(response){
    $scope.data = response.data.list;
  });

}]);
