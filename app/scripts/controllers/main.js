'use strict';

/**
 * @ngdoc function
 * @name myPokedexApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myPokedexApp
 */
angular.module('myPokedexApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
