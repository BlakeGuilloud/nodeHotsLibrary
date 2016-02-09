angular
    .module('ForumCtrl', [])
    .controller('ForumController', function($scope, ForumService, $routeParams) {
      $scope.esports = [
        {
          name: 'Player News',
          id: 'PlayerNews'
        },
        {
          name: 'Tournament News',
          id: 'TournamentNews'
        }
      ];
      $scope.strategy = [
        {
          name: 'Map Discussion'
        },
        {
          name: 'Heroes'
        }
      ];
      $scope.categoryDetail = $routeParams;
});
