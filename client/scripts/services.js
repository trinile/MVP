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
      headers: { 'Access-Control-Allow-Origin': "*" },
      url: 'http://quotes.stormconsultancy.co.uk/random.json',
      "async": true,
      "crossDomain": true
    }).then(function(response) {
      console.log(request);
      var author = response.author;
      var quote = response.quote;
      console.log(author, quote);
      return response;
    });
  };

  Quote.userAdd = function(userQuote) {
    //userQuote { author: " ", url: " "};
  };


  return Quote;
})

.factory('Images', function($http) {
  var Images = {};

  Images.getOne = function() {
    console.log('in get One');
    var url = "https://api.unsplash.com/photos/random/?client_id=";
    var client_id = "c82bb4df5656c23402223e20167b53981262b8546bba563c70498d67408b08d7";
    var options = [];
    var randomKey = Math.random() * 5;

    return $http({
      method: 'GET', 
      url: url + client_id,
      // headers: { random: Math.random()* 70 },
      // headers: { 'Cache-Control' : 'no-cache' },
      hello:  Math.random () * 5 ,
    }).then(function(response) {
      console.log('in factory imagesGetOne', response.data.urls.small, response.data.user.name);
      return response.data;
    });

  };

  return Images;
});

