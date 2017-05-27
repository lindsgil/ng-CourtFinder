require('angular')
.module('ngCourtFinder')
.controller('park-data', function($scope, $http) {
  $http.get('https://data.seattle.gov/resource/64yg-jvpt.json?$$app_token=JGJ82U54QG132EarFeqUsMDGZ&$limit=2000')
  .then(function(response) {
    $scope.parkDataRes = response.data;
  });
});
