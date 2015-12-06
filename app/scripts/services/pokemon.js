'use strict';

/**
 * @ngdoc service
 * @name myPokedexApp.Pokemon
 * @description
 * # Pokemon
 * Factory in the myPokedexApp.
 */
angular.module('myPokedexApp')
  .factory('Pokemon', ['$resource', function ( $resource ) {
    // Public API here
    return $resource('/flow/list.json');
  }]);
