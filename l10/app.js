(function() {
  'use strict';
  angular.module('DIApp', [])
    .controller('DIController', DIController);
  DIController.$inject = ['$scope', '$filter', '$injector'];
  function DIController($scope, $filter, $injector) {
    $scope.name = "Alex";
    $scope.upper = function() {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    }
    console.log($injector.annotate(DIController))
  }
}());


function AnotateMe(name, job, blah) {
  return "Blah!";
}

console.log(AnotateMe.toString());

// Minified version
// function AnotateMe(n,e,o){return"Blah!"}!function(){"use strict";function n(e,o,t){e.name="Alex",e.upper=function(){var n=o("uppercase");e.name=n(e.name)},console.log(t.annotate(n))}angular.module("DIApp",[]).controller("DIController",n),n.$inject=["$scope","$filter","$injector"]}(),console.log(AnotateMe.toString());
