function partyController($scope, partiesService, $location, $stateParams){
    
    if ($stateParams){
        partiesService.getById($stateParams.id).then(function(res){
            $scope.party = res.data;
        })
    }
        
    $scope.save = function(){
        partiesService.create($scope.$$childTail.party).then(function(){
            $location.path('/');
        })
    }
    
}