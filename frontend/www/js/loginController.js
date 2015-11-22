function loginController($scope, connectService, $state, $rootScope, $ionicHistory){
    
    $scope.doLogin = function(){
        connectService.connect($scope.$$childTail.loginData).then(function(res){
            $rootScope.user = res.data.user;
            window.localStorage['token'] = res.data.token;
            
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
            
            $state.go('app.parties');
        })
    }
    
}