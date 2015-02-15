'use strict';

angular.module('angular04').factory('loginService', function($q) {
  function getUser() {
    return localStorage.getItem('username');
  }

  function getPassword() {
    return localStorage.getItem('password');
  }

  function login(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  }

  function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  return {
    getUser: getUser,
    getPassword: getPassword,
    login: login,
    logout: logout
  }



});