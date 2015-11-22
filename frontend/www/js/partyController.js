function partyController($scope, partiesService, $state, $stateParams, $rootScope) {

    function load() {
        partiesService.getById($stateParams.id).then(function (res) {
            $scope.party = res.data;
        });
    }


    $scope.isEntrant = function () {
        if ($scope.party) {
            var r = false;
            for (var i = 0; i < $scope.party.entrant.length; i++) {
                if ($rootScope.user._id == $scope.party.entrant[i].user._id) {
                    r = true;
                    break;
                }
            };

            return r;
        }
    }

    $scope.subscribe = function () {
        partiesService.subscribe($stateParams.id, {
            id: $rootScope.user._id
        }).then(function (res) {
            load();
        });
    }

    $scope.unsubscribe = function () {
        partiesService.unsubscribe($stateParams.id, {
            id: $rootScope.user._id
        }).then(function (res) {
            load();
        });
    }
    
    $scope.delete = function () {
        partiesService.delete($stateParams.id).then(function (res) {
            $state.go('app.parties');
        });
    }

    $scope.save = function () {
        $scope.$$childTail.party.organizer = $rootScope.user._id;
        partiesService.create($scope.$$childTail.party).then(function () {
            $state.go('app.parties');
        })
    }

    if ($stateParams) {
        load();
    }

}
