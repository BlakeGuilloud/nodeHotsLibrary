// public/js/controllers/HeroesCtrl.js
angular
    .module('HeroesCtrl', [])
    .controller('HeroesController', function($scope, HeroesService, $routeParams) {

      $scope.tagline = 'Heroes';
      $scope.abilitiesBool = true;
      $scope.talentsBool = false;
      $scope.statsBool = false;
      $scope.ratingsBool = false;
      $scope.showTalents = function(){
        $scope.talentsBool = true;
        $scope.abilitiesBool = false;
        $scope.statsBool = false;
        $scope.ratingsBool = false;
      };
      $scope.showAbilities = function() {
        $scope.talentsBool = false;
        $scope.abilitiesBool = true;
        $scope.statsBool = false;
        $scope.ratingsBool = false;
      };
      $scope.showStats = function() {
        $scope.talentsBool = false;
        $scope.abilitiesBool = false;
        $scope.statsBool = true;
        $scope.ratingsBool = false;
      };
      $scope.showRatings = function() {
        $scope.talentsBool = false;
        $scope.abilitiesBool = false;
        $scope.statsBool = false;
        $scope.ratingsBool = true;
      };

      HeroesService.getHeroesJson().success(function(data){
        $scope.bigHeroData = data;
        var singleHero = $routeParams;
        for(i = 0; i < data.length; i++){
          if(singleHero.id === data[i].id){
            $scope.oneHero = data[i];
            var heroName = data[i].id;
            var heroTalents = data[i].talents;
            $scope.abilities = data[i].abilities[heroName];
            $scope.talentDetail = heroTalents[1];
            $scope.displayTalents = function(talentNum){
              $scope.talentDetail = heroTalents[talentNum];
            };
            $scope.statsDetail = data[i].stats[heroName];
            $scope.ratingsDetail = data[i].ratings;
            console.log('data', data[i]);
          };
        };
      });
});
