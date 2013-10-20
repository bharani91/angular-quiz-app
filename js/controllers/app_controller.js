'use strict';

/* Controllers */

angular.module('Quiz.controllers')
.controller('AppController', ["$scope", "Quiz", "$route", "$location", "$window", function($scope, Quiz, $route, $location, $window) {

    $scope.initialize = function() {
        $scope.gk = Quiz.load();
    }

    $scope.is_root = function() {
        return $location.path() == "/";
    }

    $scope.back = function() {
        $window.history.back();
    }

    $scope.$on("$routeChangeSuccess", function (scope, next, current) {
        $scope.transitionState = "active"
    });

}])
