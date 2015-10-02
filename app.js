angular.module('weatherly', [])

  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.city = [];
    $scope.searchCity = function  () {
      console.log($scope.city);
      var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + $scope.city +'&type=accurate&cnt=4&units=metric';
      $http.get(url)
        .then(function (response) {
          $scope.city = response.data;
          $scope.showIcon = function (index) {
            console.log(response.data.list[index].weather[0].id);
          };
        });
    };
  }]);