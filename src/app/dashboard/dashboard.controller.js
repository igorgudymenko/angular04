'use strict';

angular.module('angular04')
  .controller('DashboardCtrl', function ($scope, $state, personalService) {
    if (!personalService.ifPersonalExist()) {
      personalService.setPersonal();
    }
    $scope.personList = JSON.parse(personalService.getPersonal());
    $scope.removePerson = function(id) {
      personalService.removePerson(id);
    };
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
