(function() {
    "use strict";

    angular
        .module('a')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', 'MainService'];

    function MainCtrl($scope, MainService) {
        $scope.items = MainService.getItems();

        $scope.selectItem = function(index) {
            MainService.saveNumber(index);
            $scope.$broadcast('indexChange');
        };




    }

})();