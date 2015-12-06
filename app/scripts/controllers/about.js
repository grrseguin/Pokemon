'use strict';

/**
 * @ngdoc function
 * @name myPokedexApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myPokedexApp
 */
angular.module('myPokedexApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
