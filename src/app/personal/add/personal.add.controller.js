'use strict';

angular.module('angular04')
  .controller('PersonalAddCtrl', function ($scope, personalService) {
    $scope.addPerson = function() {
      var obj = {
        id: Math.floor(Math.random() * (12312 - 1231)) + 12,
        firstName: $scope.newPerson.firstName,
        lastName: $scope.newPerson.lastName,
        position: $scope.newPerson.position
      };
      personalService.addNewPerson(obj);
    };
  });
