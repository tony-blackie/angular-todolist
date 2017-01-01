'use strict';

angular.module('awesome-app', [
    'ui.router',
    'ngSanitize',
    'templates-app',
    'awesome-app.main'
]).
config(['$urlRouterProvider', function($urlRouterProvider) {
    //$urlRouterProvider.otherwise('/');
}]);
