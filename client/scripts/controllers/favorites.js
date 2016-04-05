'use strict';

/**
 * @ngdoc function
 * @name mvpApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mvpApp
 */
angular.module('mvp.favs')
  .controller('FavController', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
