'use strict';

/**
 * @ngdoc overview
 * @name myPokedexApp
 * @description
 * # myPokedexApp
 *
 * Main module of the application.
 */
angular
  .module('myPokedexApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        controllerAs: 'poke'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
