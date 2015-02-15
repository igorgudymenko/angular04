'use strict';

angular.module('angular04')
  .controller('PersonalListCtrl', function ($scope, personalService) {
    if (!personalService.ifPersonalExist()) {
      personalService.setPersonal();
    }
    $scope.personList = JSON.parse(personalService.getPersonal());
    $scope.removePerson = function(id) {
      personalService.removePerson(id);
    };

  });
