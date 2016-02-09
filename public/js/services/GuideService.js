// public/js/services/NerdService.js
angular.module('GuideService', [])
  .factory('GuideService', ['$http', function($http) {

    return {
      get : function() {
          return $http.get('/api/heroes');
      },
    }
}]);
