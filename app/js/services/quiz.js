'use strict';

/* Services */


angular.module('Quiz.services')
.factory("Quiz", ["$http", function($http) {
    function getRandoms(numPicks, low, high) {
        var len = high - low + 1;
        var nums = new Array(len);
        var selections = [], i;
        // initialize the array
        for (i = 0; i < len; i++) {
            nums[i] = i + low;
        }
        
        // randomly pick one from the array
        for (var i = 0; i < numPicks; i++) {
            var index = Math.floor(Math.random() * nums.length);
            selections.push(nums[index]);
            nums.splice(index, 1);
        }
        return(selections);
    }



    return {
        load: function() {
            return $http.get('../../../data/gk.json')                
        },

        getCollection: function(data, size) {
            var arr = getRandoms(size, 1, data.length);
            var results = [];


            for (var i = 0; i < arr.length; i++) {

                results.push(data[arr[i]]);
            }
            
            return results
        },

        getOne: function(data, id) {
            return data[id];
        }

    };
}])
