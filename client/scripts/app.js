// 'use strict';
angular
  .module('mvp', [
    'mvp.services',
    'mvp.quotes',
    'mvp.favs',
    'ngRoute'
    // 'ngMessages',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'QuotesController'
      })
      .when('/home', {
        templateUrl: 'signin.html',
        controller: 'AuthController'
      })
      .when('/favorites', {
        templateUrl: 'views/favorites.html',
        controller: 'FavController'
      })
      // .when('/search', {
      //   templateUrl: 'views/search.html',
      //   controller: 'SearchCtrl'
      // })
      // .when('/upload', {
      //   templateUrl: 'views/upload.html',
      //   controller: 'UploadController'
      // })
      // .when('/favorites', {
      //   templateUrl: 'views/favorites.html',
      //   controller: 'FavoritesCtrl'
      // })
      .otherwise('/');
  });

