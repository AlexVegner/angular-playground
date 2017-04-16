(function() {
  'use strict';
  angular.module('myFirstApp', [])
  .controller('myFirstController', function($scope) {
    $scope.name = "Alex";
    $scope.helloCoursera = function() {
      return "Hello Coursera!";
    }
  console.log('text');

  })
}());
