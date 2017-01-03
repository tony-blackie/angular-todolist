(function() {
    "use strict";

    angular
        .module('a')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', 'MainService'];

    function MainCtrl($scope, MainService) {
        $scope.items = MainService.getItems();

        $scope.selectItem = function(index) {
            $scope.$broadcast('itemSelected', $scope.items[index]);
        };

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