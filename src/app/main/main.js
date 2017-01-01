(function() {
    "use strict";

    angular
        .module('awesome-app.main', ['ui.router'])
        .config(function config($stateProvider) {
            $stateProvider
                .state('main', {
                    url: '/',
                    controller: 'MainCtrl',
                    templateUrl: 'main/main.tpl.html'
                });
        });
})();