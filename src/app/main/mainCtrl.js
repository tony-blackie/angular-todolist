(function() {
    "use strict";

    angular
        .module('awesome-app.main')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', 'MainService'];

    function MainCtrl($scope, MainService) {
        $scope.items = MainService.items;

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