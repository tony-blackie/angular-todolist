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




    }

})();