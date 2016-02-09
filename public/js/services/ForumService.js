// public/js/services/NerdService.js
angular.module('ForumService', [])
  .factory('ForumService', ['$http', function($http) {
    return {
      get : function() {
          return $http.get('/api/heroes');
      },
    }
}]);
