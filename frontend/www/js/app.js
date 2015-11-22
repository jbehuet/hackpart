// Ionic Starter App

function run($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
      
  });
}

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html'
      })

      .state('app.login', {
        url: '/login',
        views: {
          'menuContent': {
            templateUrl: 'templates/login.html',
            controller: 'loginController'
          }
        }
      })
  
      .state('app.new-account', {
        url: '/account/new',
        views: {
          'menuContent': {
            templateUrl: 'templates/new-account.html',
            controller: 'accountController'
          }
        }
      })    
  
      .state('app.parties', {
        url: '/parties',
        views: {
          'menuContent': {
            templateUrl: 'templates/parties.html',
            controller: 'partiesController'
          }
        }
      })
  
      .state('app.new-party', {
        url: '/party/new',
        views: {
          'menuContent': {
            templateUrl: 'templates/new-party.html',
            controller: 'partyController'
          }
        }
      })
  
      .state('app.party', {
        url: '/party/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/party.html',
            controller: 'partyController'
          }
        }
      })

  $urlRouterProvider.otherwise('/app/login');
}

angular.module('starter', ['ionic', 'starter.controllers'])
    .factory('global', function() {
      return {
          host : 'localhost',
          port: 8000
      };
    })
    .service('connectService', connectService)
    .service('accountService', accountService)
    .service('partiesService', partiesService)
    .run(run)
    .config(config);
