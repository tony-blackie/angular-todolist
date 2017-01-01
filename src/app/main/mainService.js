(function() {
    "use strict";

    angular
        .module('awesome-app.main')
        .factory('MainService', MainService);

    function MainService () {
        var service = this;

        service.items = [
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

        service.getItems = function ()  {
            return service.items;
        }

        return service;
    }
})();