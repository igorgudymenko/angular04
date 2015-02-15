'use strict';

angular.module('angular04')
  .controller('LoginCtrl', function ($scope, $state, loginService) {
    $scope.login = function() {
      loginService.login($scope.user.username, $scope.user.password);
      $state.go('dashboard.personal');
    };

  });
