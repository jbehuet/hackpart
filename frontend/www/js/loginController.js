function loginController($scope, connectService, $state, $rootScope){
    
    $scope.doLogin = function(){
        connectService.connect($scope.$$childTail.loginData).then(function(res){
            $rootScope.user = res.data.user;
            $rootScope.token = res.data.token;            
            $state.go('app.parties');
        })
    }
    
}