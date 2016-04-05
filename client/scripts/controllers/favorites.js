angular.module('mvp.favs', [])
  .controller('FavController', function ($scope, Quotes) {

    //methods for favorites saved
    $scope.favorites = [];
    $scope.getFavs = function() {
      Quotes.getAll().then(function(quotes) {
        console.log('got quotes');
      })
    }
  });
