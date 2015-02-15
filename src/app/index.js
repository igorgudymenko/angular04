'use strict';

angular.module('angular04', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('dashboard', {
        abstract: false,
        url: '/dashboard',
        views: {
          'main': {
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'DashboardCtrl',
            resolve: {
              checkPermission: ['loginService', function(loginService) {
                return loginService.getUser() && loginService.getPassword();
              }]
            }
          }
        }
      })
      .state('login', {
        url: '/login',
        views: {
          'main': {
            templateUrl: 'app/login/login.html',
            controller: 'LoginCtrl',
            resolve: {
              checkPermission: ['loginService', function(loginService) {
                return loginService.getUser() && loginService.getPassword();
              }]
            }
          }
        }
      })
      .state('dashboard.personal', {
        url: '',
        views: {
          'personalList@dashboard': {
            templateUrl: 'app/personal/list/personal.list.html',
            controller: 'PersonalListCtrl'
          },
          'personalAdd@dashboard': {
            templateUrl: 'app/personal/add/personal.add.html',
            controller: 'PersonalAddCtrl'
          }
        }
      })
    ;

    $urlRouterProvider.otherwise('/login');
  })
  .run(['$rootScope', '$state', '$stateParams', 'loginService', function($rootScope, $state, $stateParams, loginService) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $state.transitionTo('dashboard.personal');

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      var username = loginService.getUser();
      var password = loginService.getPassword();
      var state;
      if (!username || !password) {
        state = 'login';
      } else {
        return;
      }
      event.preventDefault();
      $state.go(state, {}, {notify: false})
        .then(function() {
          console.log(toState);
          $rootScope.$broadcast('$stateChangeSuccess', toState, toParams, fromState, fromParams);
        });
    });

  }])
;
