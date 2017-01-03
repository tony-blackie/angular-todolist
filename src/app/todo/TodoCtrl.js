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
    }
})();