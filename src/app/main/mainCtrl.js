(function() {
    "use strict";

    angular
        .module('awesome-app.main')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope'];

    function MainCtrl($scope) {
        $scope.items = [
            {
                name: "Liza",
                cross: false
            },
            {
                name: "Tina",
                cross: false

            },
            {
                name: "Angelina",
                cross: false
            },
            {
                name: "Eva",
                cross: false
            },
            {
                name: "Dasha",
                cross: false
            },
            {
                name: "Alice",
                cross: false
            }
        ];

        $scope.deleteItem = function(index) {
            if ($scope.items[index].name  === "Angelina") {
                return;
            }
            $scope.items.splice(index, 1);
        };


        $scope.crossOut = function (index) {
            if ($scope.items[index].cross === false) {
                $scope.items[index].cross = true;
            } else {
                $scope.items[index].cross = false;
            }
        };

        $scope.addName = function () {
            var obj = {
                name: $scope.name,
                cross: false
            };
            $scope.items.push(obj);

        };


    }

})();