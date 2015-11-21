function partyController($scope, partiesService, $location){
    
    $scope.save = function(){
        partiesService.create($scope.$$childTail.party).then(function(){
            $location.path('/');
        })
    }
    
}