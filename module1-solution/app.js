(function() {
  'use strict';
  angular.module('MsgApp', [])
    .controller('MsgController', MsgController);
    MsgController.$inject = ['$scope'];
    function MsgController($scope) {
      $scope.foods = '';
      $scope.message = '';
      $scope.fontcolor="black";
      $scope.borderstyle="border:0px; border-style:solid; border-color:red; padding: 1em;";
      $scope.checkFoods = function() {
        var foodArray = $scope.foods.split(",");
        // filter empty items
        var filteredArray = foodArray.filter(isNotEmpty);
        if (filteredArray.length == 0) {
          $scope.message =  "Please enter data first";
          $scope.fontcolor="red";
          $scope.borderstyle="border:3px; border-style:solid; border-color:red; padding: 1em;"
        } else if (filteredArray.length  <= 3) {
          $scope.message =  "Enjoy!";
          $scope.fontcolor="green";
          $scope.borderstyle="border:3px; border-style:solid; border-color:green; padding: 1em;"
        } else {
          $scope.message =  "Too much!";
          $scope.fontcolor="green";
          $scope.borderstyle="border:3px; border-style:solid; border-color:green; padding: 1em;"
        }
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
