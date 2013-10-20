'use strict';

/* Controllers */

angular.module('Quiz.controllers')
.controller('PracticeController', ["$scope", "Quiz", "$routeParams", "$location", function($scope, Quiz, $routeParams, $location) {

    var init = function() {
        $scope.show_answer = false;
        $scope.gk.success(function(data) {
            $scope.question = Quiz.getOne(data, $routeParams.id);
            $scope.next_question_id = Math.round(Math.random() * data.length);
        });
    } 

    $scope.has_attempted = function(question) {
        return !!question.attempted;
    }

    $scope.correct_answer = function(question, option_index) {
        return ($scope.has_attempted(question)) && (question.answer == option_index);
    }

    $scope.incorrect_answer = function(question, option_index) {
        return ($scope.has_attempted(question))&&(question.selected == option_index);
    }

    $scope.skip = function() {
        $location.path("/practice/" + $scope.next_question_id);
    }


    // Single Question - Verify answer
    $scope.check_answer = function(question) {
        if(question.selected == question.answer) {
            $scope.answered_correctly = true;
        } else {
            $scope.answered_correctly = false;
        }

        $scope.show_answer = true;
        question.attempted = true;

    }


    // 50-50 option
    $scope.hide_two_options = function(question) {
        var options = question.options,
        answer = question.answer;
        question.strike_array = []; // CSS display none added to elements of this array


        while(question.strike_array.length != 2) {
            var rand = Math.ceil(Math.random()*3);
            if(rand != answer && question.strike_array.indexOf(rand) < 0) {
                question.strike_array.push(rand);
            }
        }

        question.hide_help_button = true;
    }


    init();

}])
