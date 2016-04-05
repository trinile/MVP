angular.module('mvp.favs', [])
  .controller('FavController', function ($scope, Quotes) {

    //methods for favorites saved
    $scope.favorites = [
    {
      url: "https://images.unsplash.com/photo-1447959945456-31956e248324?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=400&fit=max&s=401ede79a5c0f710f17500cff073ca21",
      quote: "Einstein argued that there must be simplified explanations of nature, because God is not capricious or arbitrary. No such faith comforts the software engineer.",
      author: "Fred Brooks"
    },
    {
      url: "https://images.unsplash.com/photo-1422557201808-34aff9fb1264?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=400&fit=max&s=0e702fa9640e5cf2187e67e18df3e372",
      quote : "Beware of bugs in the above code; I have only proved it correct, not tried it.",
      author: "Donald Knuth"
    }

    ];
    $scope.getFavs = function() {
      Quotes.getAll().then(function(quotes) {
        console.log('got quotes');
      })
    }



  });
