// 'use strict';
angular
  .module('mvp', [
    'mvp.services',
    'mvp.quotes',
    'mvp.favs',
    'mvp.add',
    'ngRoute'
    // 'ngMessages',
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'QuotesController'
      })
      .when('/favorites', {
        templateUrl: 'views/favorites.html',
        controller: 'FavController'
      })
      .when('/addquote', {
        templateUrl: 'views/addQuote.html',
        controller: 'AddController'
      })
      // .when('/upload', {
      //   templateUrl: 'views/upload.html',
      //   controller: 'UploadController'
      // })
      // .when('/favorites', {
      //   templateUrl: 'views/favorites.html',
      //   controller: 'FavoritesCtrl'
      // })
      .otherwise('/');

  $httpProvider.defaults.useXDomain = true;
  // $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
  // $httpProvider.headers.common['cache-control'] = 'no-cache';
  // $httpProvider.defaults.withCredentials = true;
  // $httpProvider.headers.common["Access-Control-Allow-Origin"] = "*";
  $httpProvider.defaults.cache = false;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });
