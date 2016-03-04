angular.module('firstApp.api', [])
  .factory('api', ['$http', function($http){

    // Create API Call with promise
    return $http.get('http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743,2988507,2950159,3117735,2618425,2267057&units=metric&appid=44db6a862fba0b067b1930da0d769e98', { cache: true });

  }]);
