'use strict';

/*
 *  Title: GK Quiz App
 *  Author: Bharani Muthukumaraswamy <bharani@abhayam.co.in>
 *  Author URL: http://abhayam.co.in
 */

// Declare app level module which depends on filters, and services
angular.module('Quiz', [
    'ngRoute',
    'ngTouch',
    'Quiz.filters',
    'Quiz.services',
    'Quiz.directives',
    'Quiz.controllers',
    ])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/index.html', controller: 'IndexController'});
    $routeProvider.when('/practice/:id', {templateUrl: 'partials/practice.html', controller: 'PracticeController'});
    $routeProvider.when('/test', {templateUrl: 'partials/test.html', controller: 'TestController'});

    $routeProvider.when('/info', {templateUrl: 'partials/info.html' });
    $routeProvider.when('/recommended-books', {templateUrl: 'partials/recommended_books.html' });
}]);



// Module declarations
angular.module('Quiz.filters', []);
angular.module('Quiz.services', []);
angular.module('Quiz.directives', []);
angular.module('Quiz.controllers', []);
