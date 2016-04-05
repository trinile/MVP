angular.module('mvp.add', [])
  .controller('AddController', function ($scope, $location, Quotes, Images) {
    $scope.quote = {};
    $scope.match = {};
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
    }, 
    {
      quote: "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.",
      author: "Bjarne Stroustrup",
      id: 12,
      vote: true,
      tags: []
    },
    {
      quote: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      author: "Brian Kernighan",
      id: 5,
      vote: true,
      tags: []
    },
    {
      quote: "Some people, when confronted with a problem, think \"I know, I'll use regular expressions.\" Now they have two problems.",
      author: "Jamie Zawinski",
      id: 4,
      url: "http://quotes.stormconsultancy.co.uk/quotes/4",
      vote: true,
      tags: []
    }
    ];

    $scope.addQuote = function(quoteObj) {
      // { quote: '', author: '', upvote: 'true'}
      var quote = quoteObj;
      $scope.data.unshift(quote);
      $scope.quote = {};
    };

    $scope.vote = function(quoteObj) {
      quoteObj.vote = quoteObj.vote === true ? false : true;
    };

    $scope.matchQuote = function(quoteObj) {
      console.log('in matchQuote');
      //quote Obj: author, quote properties
      var quote = quoteObj.quote;
      var author = quoteObj.author;
      console.log(author);
      Images.getOne()
      .then(function(image) {
        console.log('image returned from http req', image);
        $scope.match = {
          exists: true,
          url: image.urls.regular,
          name: image.user.name,
          username: image.user.username,
          quote: quote,
          author: author
        };
      }).catch(function(err) {
        console.log(err);
      });


      $scope.match = {};
    };

    $scope.removeMatch = function() {
      $scope.match = false;
    };

    $scope.matchAgain = function(quoteObj) {
      $scope.matchQuote(quoteObj);
    };

});