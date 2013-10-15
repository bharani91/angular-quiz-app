'use strict';

/* Controllers */

angular.module('Quiz.controllers')
.controller('TestController', ["$scope", "Quiz", "$window", function($scope, Quiz, $window) {

    $scope.size = 2; // number of questions
    $scope.countdown = 1*1; // 5 mins

    var init = function() {
        $scope.$broadcast('timer-start');
        $scope.timer_stopped = false;
        $scope.viewing_results = false;

        $scope.$on('timer-stopped', function (event, data){
            $scope.timer_stopped = true;
            $scope.$apply();
        });


        $scope.gk.success(function(data) {
            $scope.test = Quiz.getCollection(data, $scope.size);
        });
    } 

    $scope.correct_answers = function(questions) {
        var count = 0;
        for(var i = 0; i < questions.length; i++) {
            if(questions[i].selected == questions[i].answer) {
                count++;
            }
        }

        return count;
    }


    $scope.correct_answer = function(question, option_index) {
        return ($scope.viewing_results) && (question.answer == option_index);
    }

    $scope.incorrect_answer = function(question, option_index) {
        return ($scope.viewing_results)&&(question.selected == option_index);
    }

    $scope.reload = function() {
        init();
    }

    $scope.show_results = function(questions) {

        for(var i = 0; i < questions.length; i++) {
            if(questions[i].selected == questions[i].answer) {
                questions[i].answered_correctly = true;
            }
        }

        $scope.viewing_results = true;
        $window.scrollTo(0,0);
    }


    $scope.remaining_questions = function(test) {
        var answered = [];
        for(var i = 0; i< test.length; i++) {
            if(test[i].selected) {
                answered.push(test[i])
            }
        }

        return !!($scope.size - answered.length)
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
