'use strict';

/* Services */


angular.module('Quiz.services')
.factory("Quiz", ["$http", function($http) {
    return {
        load: function() {
            return $http.get('../../../data/gk.json')                
        },

        getCollection: function(data, size) {
            var arr = [];
            for (var i = 0; i < size; i++) {
                arr.push(data[Math.round(Math.random() * data.length)]);
            }
            return arr
        },

        getOne: function(data, id) {
            return data[id];
        }

    };
}])
