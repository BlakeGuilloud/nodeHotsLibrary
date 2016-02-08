// public/js/services/NerdService.js
angular.module('HeroesService', [])
  .factory('HeroesService', ['$http', function($http) {
    var getHeroesJson = function(){
      console.log('why not?');
      return $http.get('assets/heroes.json')
    }
    return {
      getHeroesJson : getHeroesJson

        // call to get all nerds
        // get : function() {
        //     return $http.get('/api/heroes');
        // },

                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        // create : function(heroData) {
        //     return $http.post('/api/heroes', heroData);
        // },
        //
        // // call to DELETE a nerd
        // delete : function(id) {
        //     return $http.delete('/api/heroes/' + id);
        // }
    };

}]);
