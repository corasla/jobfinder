(function() {
    'use strict';

    angular.module('app')
            .controller('TestCtrl', TestCtrl);
            
    function TestCtrl() {
        var vm = this;
        vm.jobs = [];

        activate();

            //init function to set up variables
        function activate() {
                //TO DO: maybe do some other stuff as well
            setBasicData();
        }
        function setBasicData() {
            vm.jobs = [
                {
                    title: 'Sales Person',
                    description:'You will do stuff'
                },
                {
                    title: 'Accountant',
                    description:'You will also do some stuff'
                }
            ];
        }

    }
}());
