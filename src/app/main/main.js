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
                })
                .state('price', {
                    url: '/price',
                    controller: 'PriceCtrl',
                    templateUrl: 'main/price.tpl.html'
                });
        });
})();