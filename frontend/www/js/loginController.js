function loginController($scope, connectService, $location, $rootScope){
    
    $scope.doLogin = function(){
        connectService.connect($scope.$$childTail.loginData).then(function(res){
            $rootScope.user = res.data.user;
            $rootScope.token = res.data.token;            
            $location.url('/app/parties');
        })
    }
    
}