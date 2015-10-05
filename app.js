angular.module('weatherly', [])
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    // $scope.search = [];
    var weatherSearch = function  () {
      console.log($scope.search);
      var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + $scope.search +'&type=accurate&cnt=4';
      $http.get(url)
        .then(function (response) {
          $scope.search = '';
          $scope.city = response.data;
          console.log(response.data);
          var temp = response.data.list;
          temp.forEach(function (part, index) {
            console.log(temp[index]);
            temp[index].temp.day = Math.round(temp[index].temp.day * (9/5) - 459.67); 
            var date = new Date(temp[index].dt *1000);
            document.write(date.toGMTString()+"<br>"+ date.toLocaleString());
            temp[index].dt = date;
          });
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
        }, function errorCallback(response, status) {
          alert('No city found!');
        });
    };
    if ($scope.search === undefined) {
      $scope.search = 'San Francisco';
      weatherSearch();
    };
    $scope.searchCity = function () {
      weatherSearch();
    };
  }]);