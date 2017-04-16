(function() {
  'use strict';
  angular.module('MsgApp', [])
    .controller('MsgController', MsgController);
    MsgController.$inject = ['$scope'];
    function MsgController($scope) {
      $scope.foods = '';
      $scope.message = '';

      $scope.checkFoods = function() {
        $scope.message = getMessage($scope.foods)
      }

      function getMessage(foods) {
        var foodArray = foods.split(",");
        // filter empty items
        var filteredArray = foodArray.filter(isNotEmpty);
        if (filteredArray.length == 0) {
          return "Please enter data first";
        } else if (filteredArray.length  <= 3) {
          return "Enjoy!";
        } else {
          return "Too much!";
        }
      }

      // check if it's not empty
      function isNotEmpty(str) {
        var strTrimed = str.trim();
        return !(!strTrimed || 0 === strTrimed.length);
      }
    }

    // Add trim if needed
    if(!String.prototype.trim){
      String.prototype.trim = function(){
        return this.replace(/^\s+|\s+$/g,'');
      };
    }

}());
