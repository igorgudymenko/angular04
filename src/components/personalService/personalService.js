'use strict';

angular.module('angular04').factory('personalService', function() {
  var defaultStaff = {
    personal: [
      {
        id: 123,
        firstName: 'asdfsdafsaf',
        lastName: 'asdasdad',
        position: 'asdasda'
      },
      {
        id: 113,
        firstName: 'asdfsdafsaf',
        lastName: 'asdasdad',
        position: 'asdasda'
      },
      {
        id: 122,
        firstName: 'asdfsdafsaf',
        lastName: 'asdasdad',
        position: 'asdasda'
      },
      {
        id: 124,
        firstName: 'asdfsdafsaf',
        lastName: 'asdasdad',
        position: 'asdasda'
      },
      {
        id: 125,
        firstName: 'asdfsdafsaf',
        lastName: 'asdasdad',
        position: 'asdasda'
      }
    ]
  };

  function ifPersonalExist() {
    var data = JSON.parse(localStorage.getItem('personList'));
    if (data === 'undefined') {
      return true;
    }
  }

  function setPersonal() {
    localStorage.setItem('personList', JSON.stringify(defaultStaff));
  }

  function getPersonal() {
    return localStorage.getItem('personList');
  }

  function addNewPerson(obj) {
    var data = JSON.parse(localStorage.getItem('personList'));
    var arr = [data.personal];
    console.log(arr);
    arr.push(obj);
    console.log(arr);
    var newData = {
      personal: [

      ]
    };


    localStorage.setItem('personList', JSON.stringify(newData));

  }

  function editPerson() {

  }

  function removePerson(id) {
    var data = JSON.parse(localStorage.getItem('personList'));
    var tmp = data.personal;
    var newData;
    tmp = tmp.filter(function(tmp) {
      return tmp.id !== id;
    });
    newData = {personal: tmp};
    localStorage.setItem('personList', JSON.stringify(newData));
  }

  return {
    setPersonal: setPersonal,
    getPersonal: getPersonal,
    addNewPerson: addNewPerson,
    editPerson: editPerson,
    removePerson: removePerson,
    ifPersonalExist: ifPersonalExist
  };
});