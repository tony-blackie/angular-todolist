(function(){
    "use strict";

    angular
            .module('a')
            .controller('TodoCtrl', TodoCtrl);

    TodoCtrl.$inject = ['$scope', 'MainService'];

    function TodoCtrl($scope, MainService) {
        var index = MainService.getNumber();
        $scope.todoList = MainService.getItems()[index];

        $scope.$on('indexChange', function(){
           var index = MainService.getNumber();
            $scope.todoList = MainService.getItems()[index];
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