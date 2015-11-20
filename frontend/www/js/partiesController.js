function partiesController($scope, partiesService) {
  partiesService.get().then(function(parties){
      $scope.parties = parties.data;
  })
}