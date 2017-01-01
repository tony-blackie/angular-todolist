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
                name: "Angelina"
            },
            {
                name: "Eva"
            },
            {
                name: "Dasha"
            },
            {
                name: "Alice"
            }
        ];

        $scope.deleteItem = function(index) {
            if ($scope.items[index].name  === "Tina") {
                return;
            }
            $scope.items.splice(index, 1);
        }
    }

})();