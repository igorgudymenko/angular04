'use strict';

angular.module('angular04')
  .controller('HeaderCtrl', function ($scope, $state, loginService) {
    $scope.username = loginService.getUser();
    $scope.logout = function() {
      loginService.logout();
      $state.go('login');
    };
  });
