(function() {
    "use strict";

    angular
        .module('awesome-app.main')
        .controller('MainCtrl', MainCtrl)
        .controller('PriceCtrl', PriceCtrl);

    MainCtrl.$inject = ['$scope'];

    function MainCtrl($scope) {

    }

    function PriceCtrl() {

    }
})();