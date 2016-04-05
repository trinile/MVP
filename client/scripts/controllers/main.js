

// angular.module('mvp')
//   .controller('MainCtrl', function ($scope, $window, $rootScope, $auth) {
//     $scope.isAuthenticated = function() {
//       //check if logged in
//       return $auth.isAuthenticated();
//     },
//     $scope.linkInstagram = function() {
//       //connect email acct with Instagram
//       $auth.link('instagram')
//       .then(function(response) {
//         $window.localStorage.currentUser = JSON.stringify(response.data.user);
//         $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
//       });
//     };
//   });

angular.module('mvp.quotes', [])
  .controller('QuotesController', function ($scope, $location, Quotes) {
  //Upload Controller
  $scope.quote = {};
  $scope.stockData = window.photosWithQuotes;
  $scope.generateImage = function() {
    alert("ive been clicked");
    console.log('in generate image');
    Quotes.fetch()
    .then(function(quote) {
      console.log(quote);
      $scope.quote.author = quote.author;
      $scope.quote.quote = quote.quote;
    })
    .catch(function(err) {
      console.log(err);
    });
  };
  
});