(function() {
    'use strict';

    angular.module('app')
            .controller('TestCtrl', TestCtrl);

    TestCtrl.$inject = ['$scope', '$resource'];
    function TestCtrl($scope, $resource) {
        var vm = this;
        vm.jobs = [];

        activate();

            //init function to set up variables
        function activate() {
                //TO DO: maybe do some other stuff as well
            setBasicData();
        }
        function setBasicData() {
            vm.jobs = $resource('api/jobs').query();
        }

    }
}());
