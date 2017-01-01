(function() {
    "use strict";

    angular
        .module('awesome-app.main')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope'];

    function MainCtrl($scope) {
        $scope.items = [
            {
                name: "Liza"
            },
            {
                name: "Tina"
            },
            {
                name: "Alice"
            }
        ]
    }

})();