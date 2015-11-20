// Ionic Starter App

function run($ionicPlatform) {
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
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
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
  
      .state('app.party', {
        url: '/party',
        views: {
          'menuContent': {
            templateUrl: 'templates/party.html',
            controller: 'partyController'
          }
        }
      })

  $urlRouterProvider.otherwise('/app/parties');
}


angular.module('starter', ['ionic', 'starter.controllers'])
    .factory('global', function() {
      return {
          host : 'localhost',
          port: 8000
      };
    })
    .service('partiesService', partiesService)
    .run(run)
    .config(config);
