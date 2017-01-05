(function() {
    "use strict";

    angular
        .module('a')
        .controller('CommonCtrl', CommonCtrl);

    CommonCtrl.$inject = ["$scope","$http"];

    function CommonCtrl($scope ,$http) {

        function getCommonTasks() {
            $scope.gh = $http.get("staff.json").then(function(response){
               $scope.tasks = response.data;
            });
        }

        getCommonTasks();
    }
})();