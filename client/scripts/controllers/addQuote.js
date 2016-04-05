angular.module('mvp.add', [])
  .controller('AddController', function ($scope, $location, Quotes) {
    $scope.quote = {};
    $scope.data = [
    { quote: "Documentation is like sex; when it\'s good, it\'s very, very good, and when it\'s bad, it\'s better than nothing",
      author: 'Dick Brandon',
      url: "http://quotes.stormconsultancy.co.uk/quotes/31",
      id: 31,
      vote: true,
      tags: []
    },
    {
      quote: "Programming is like sex: one mistake and you're providing support for a lifetime.",
      author: "Michael Sinz",
      url: "http://quotes.stormconsultancy.co.uk/quotes/29",
      id: 29,
      vote: true,
      tags: []
    },
    {
      quote: "Walking on water and developing software from a specification are easy if both are frozen.",
      author:"Edward V Berard",
      id: 2,
      url: "http://quotes.stormconsultancy.co.uk/quotes/2",
      vote: false,
      tags: []
    }

    ];

    $scope.addQuote = function(quoteObj) {
      // { quote: '', author: '', upvote: 'true'}
      var quote = quoteObj;
      $scope.data.push(quote);
      $scope.quote = {};
    };

    $scope.vote = function(quoteObj) {
      quoteObj.vote = quoteObj.vote === true ? false : true;
    };
});