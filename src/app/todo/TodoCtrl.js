(function(){
    "use strict";

    angular
            .module('a')
            .controller('TodoCtrl', TodoCtrl);

    TodoCtrl.$inject = ['$scope'];

    function TodoCtrl($scope) {
        $scope.todolist = {};

        $scope.$on('itemSelected', function(event, param) {
            $scope.todolist = param;
        });

        $scope.deleteItem = function(index) {
            $scope.todolist.content.splice(index, 1);
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