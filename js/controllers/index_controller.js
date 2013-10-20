'use strict';

/* Controllers */

angular.module('Quiz.controllers')
    .controller('IndexController', ["$scope", "Quiz", "$route", function($scope, Quiz, $route) {

        $scope.rand = "1";

        $scope.gk.success(function(data) {
            $scope.rand = "" + (Math.round(Math.random() * data.length));
        });

    }])
