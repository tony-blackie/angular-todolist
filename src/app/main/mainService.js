(function() {
    "use strict";

    angular
        .module('a')
        .factory('MainService', MainService);

    function MainService () {
        var service = this;

        service.chosenListNumber = 0;

        service.items = [
            {
                name: 'TodoList1',
                content: [
                    {
                        text: "Liza",
                        cross: false
                    },
                    {
                        text: "Liza2",
                        cross: false
                    },
                    {
                        text: "Liza3",
                        cross: false
                    }
                ]
            },
            {
                name: 'TodoList2',
                content: [
                    {
                        text: "Lola",
                        cross: false
                    },
                    {
                        text: "Lola2",
                        cross: false
                    },
                    {
                        text: "Lola3",
                        cross: false
                    }
                ]
            },
            {
                name: 'TodoList3',
                content: [
                    {
                        text: "Lila",
                        cross: false
                    },
                    {
                        text: "Lila2",
                        cross: false
                    },
                    {
                        text: "Lila3",
                        cross: false
                    }
                ]
            },
            {
                name: 'TodoList4',
                content: [
                    {
                        text: "Lesya",
                        cross: false
                    },
                    {
                        text: "Lesya2",
                        cross: false
                    },
                    {
                        text: "Lesya3",
                        cross: false
                    }
                ]
            }
        ];

        service.getItems = function ()  {
            return service.items;
        };

        service.saveNumber = function(number) {
            service.chosenListNumber = number;
        };

        service.getNumber= function() {
            return service.chosenListNumber;
        };

        return service;
    }
})();