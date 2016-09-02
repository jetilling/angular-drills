angular.module('apiApp').controller('controller', function($scope, service){

  $scope.getStarships = function(){
    service.getData().then(function(starships){
      $scope.starships = starships;
    })
  }

  $scope.getStarships();
})
