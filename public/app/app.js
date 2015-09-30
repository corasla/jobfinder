(function() {
    'use strict';
        //define our app module's controller
    angular.module('app')
            .controller('TestCtrl', TestCtrl);

    TestCtrl.$inject = ['$resource', 'jobs'];
    function TestCtrl($resource, jobs) {
            //differentiate scope
        var vm = this;
            //instantiate our bindable jobs variable
        vm.jobs = [];
        vm.submit = submitData;
        
        activate();

            //init function to set up variables
        function activate() {
                //TO DO: maybe do some other stuff as well
            setBasicData();
        }

        function setBasicData() {
                //get jobs data from our api (do a simple query that in exchange return the data)
            vm.jobs = $resource('api/jobs').query();
        }

        function submitData() {
            var newJobObject = {title: vm.title, description: vm.description};
            jobs.save(newJobObject);
            vm.jobs.push(newJobObject)
            flushInputs();
        }

        function flushInputs() {
            vm.title = "";
            vm.description = "";
        }
    }
}());
