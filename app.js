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
            if (response.data.list[index].weather[0].id <= 299) {
              return 'thunderstorm'
            } else if (response.data.list[index].weather[0].id <= 399) {
              return 'drizzle'
            } else if (response.data.list[index].weather[0].id <= 599) {
              return 'rain'
            } else if (response.data.list[index].weather[0].id <= 699) {
              return 'snow'
            } else if (response.data.list[index].weather[0].id <= 799) {
              return 'atmosphere'
            } else if (response.data.list[index].weather[0].id <= 899) {
              return 'clouds'
            } else if (response.data.list[index].weather[0].id <= 949) {
              return 'extreme'
            } else if (response.data.list[index].weather[0].id <= 999) {
              return 'additional'
            };
          };
        });
    };
  }]);