angular.module('weatherly', [])

  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.city = [];
    $scope.searchCity = function  () {
      console.log($scope.city);
      var url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + $scope.city +'&type=accurate&cnt=4&units=imperial';
      $http.get(url)
        .then(function (response) {
          console.log(response.data);
          $scope.city = response.data;
        });
    };
  }]);