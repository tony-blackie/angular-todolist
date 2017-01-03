(function() {
    "use strict";

    angular
        .module('a', ['ui.router'])
        .config(function config($stateProvider) {
            $stateProvider
                .state('main', {
                    url: '/',
                    controller: 'MainCtrl',
                    templateUrl: 'main/main.tpl.html',
                    abstract: true
                })
                .state('main.todo', {
                    url: 'todo',
                    controller: 'TodoCtrl',
                    templateUrl: 'todo/todo.tpl.html'
                })
                .state('main.common', {
                    url: 'common',
                    controller: 'CommonCtrl',
                    templateUrl: 'common/common.tpl.html'
                });
        });
})();