(function() {
  'use strict';
  angular.module('MsgApp',[])
    .controller('MsgController', MsgController);
    MsgController.$inject = ['$scope'];
    function MsgController($scope) {
      console.log('test');
      $scope.name = 'Alex';
      $scope.stateOfBeing = 'red';
      $scope.sayMessage = function() {
        return "Say message";
      }
      $scope.feedYaakov = function() {
        $scope.stateOfBeing = 'blue';
      }
    }
}());
