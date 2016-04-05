'use strict';

angular.module('mvp.services', [])

.factory('Quotes', function($http) {
  var Quote = {};

  Quote.getAll = function() {
    return $http({
      method: 'GET',
      url: '/api/quotes'
    }).then(function(response) {
      return response.data;
    });
  };

  Quote.addOne = function(quoteObj) {
    return $http({
      method: 'POST',
      url: '/api/quotes',
      data: JSON.stringify(quoteObj)
    }).then(function(response) {
      return response;
    });
  };

  Quote.fetch = function() {
    return $http({
      method: 'GET',
      url: 'http://quotes.stormconsultancy.co.uk/random.json'
    }).then(function(response) {
      var author = response.author;
      var quote = response.quote;
      console.log(author, quote);
      return response;
    });
  };
  return Quote;
})

.factory('Images', function($http) {
  var Images = {};

  Images.GetOne = function() {
    return $http({
      method: 'GET',
      url: 'https://api.unsplash.com/photos/random/?client_id=c82bb4df5656c23402223e20167b53981262b8546bba563c70498d67408b08d7',
    }).then(function(response) {
      var imageURL = response.urls.small;
      var username = response.username;
      var name = response.name;
      console.log(imageURL, username, name);
      return response;
    });
  };

  return Images;
});

