// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/heroes', {
            templateUrl: 'views/heroes.html',
            controller: 'HeroesController'
        })

        .when('/heroes/:id', {
          templateUrl: 'views/heroDetail.html',
          controller: 'HeroesController'
        });

    // $locationProvider.html5Mode(true);

}])
