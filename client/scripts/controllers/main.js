angular.module('mvp.quotes', [])
  .controller('QuotesController', function ($scope, $location, Quotes, Images, $http) {
  //Upload Controller
    $scope.quote = {};
    $scope.image = {};
    $scope.quoteFake = { quote: "helloooooooo", author: "Trini Le" };
    $scope.stockData = window.photosWithQuotes;
    console.log(window.photosWithQuotes);
    $scope.generateQuote = function() {
    // jsonpDispatcher[key] = function () {
    //   callback.apply(this, arguments);
    //   delete jsonpDispatcher[key];
    // };

    var url = "http://quotes.stormconsultancy.co.uk/random.json?callback=JSON_CALLBACK()";
    $http.jsonp(url)  
    .then(function(data){
      console.log('errrrrr');
        // console.log(data.found);
        console.log(JSON.stringify(data));
        console.log(data);
    }).catch(function(err, data) {
      console.log(err);
      console.log(data);
      });
    };
    // var url = "http://quotes.stormconsultancy.co.uk/random.json";
    // var script = document.createElement('script');
    // script.src = url +"?callback=generateQuote";

    // document.body.appendChild(script);    
    // };

    $scope.generateImage = function() {
      console.log('in generate Image');
      Images.getOne()
      .then(function(image) {
        console.log('imageObj returned from http request', image);
        $scope.image = {
          url: image.urls.small,
          name: image.user.name,
          username: image.user.username
        }
      })
      .catch(function(err) {
        console.log(err);
      });
    };

    $scope.imageFromKeyWords = function(quoteObj) {
      //split words 
      // var words = quoteObj.quote.split(" ");
      // var ignoreWords = ['and', 'the']
    }
});
