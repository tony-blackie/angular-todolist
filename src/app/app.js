'use strict';

angular.module('awesome-app', [
    'ui.router',
    'ngSanitize',
    'templates-app',
    'a'
]).
config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/todo');
}]);
