'use strict';

angular.module('angular04', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('/dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl',
        resolve: {
          checkPermission: ['loginService', function(loginService) {
            return loginService.getUser() && loginService.getPassword();
          }]
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl',
        resolve: {
          checkPermission: ['loginService', function(loginService) {
            return loginService.getUser() && loginService.getPassword();
          }]
        }

      });

    $urlRouterProvider.otherwise('/');
  })
  .run(['$rootScope', '$state', 'loginService', function($rootScope, $state, loginService) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      var username = loginService.getUser();
      var password = loginService.getPassword();
      var state;

      if (username === 'undefined' || password === 'undefined') {
        state = 'login';
      } else {
        return;
      }
      event.preventDefault();
      $state.go(state, {}, {notify: false})
        .then(function() {
          $rootScope.$broadcast('$stateChangeSuccess', toState, toParams, fromState, fromParams);
        });
    });

  }])
;
