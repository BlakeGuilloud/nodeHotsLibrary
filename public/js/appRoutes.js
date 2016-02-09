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
        })

        .when('/forum', {
          templateUrl: 'views/forum.html',
          controller: 'ForumController'
        })
        .when('/forum/:id', {
          templateUrl: 'views/forumDetail.html',
          controller: 'ForumController'
        })

        .when('/guides', {
          templateUrl: 'views/guides.html',
          controller: 'GuideController'
        });

    // $locationProvider.html5Mode(true);

}])
