(function() {
    "use strict";

    angular
        .module('a')
        .factory('MainService', MainService);

    function MainService () {
        var service = this;

        service.chosenListNumber = null;

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
                name: 'TodoList3',
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
                name: 'TodoList4',
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
            }
        ];

        service.getItems = function ()  {
            return service.items;
        };

        service.saveNumber = function(number) {
            service.number = number;
        }

        return service;
    }
})();