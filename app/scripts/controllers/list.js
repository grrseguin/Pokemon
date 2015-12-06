'use strict';

/**
 * @ngdoc function
 * @name myPokedexApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the myPokedexApp
 */
angular.module('myPokedexApp')
  .controller('ListCtrl', ['$scope', 'Pokemon', function ($scope, Pokemon) {
    this.list = Pokemon.query();
    console.log(this.list);
  }]);
