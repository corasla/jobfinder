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

        activate();

            //init function to set up variables
        function activate() {
                //TO DO: maybe do some other stuff as well
            setBasicData();
            saveJobsData();
        }


        function setBasicData() {
                //get jobs data from our api (do a simple query that in exchange return the data)
            vm.jobs = $resource('api/jobs').query();
        }

        function saveJobsData(){
            var jobsObject = {  title: 'test title',
                           description: 'test description'};
            jobs.save(jobsObject);
        }

    }
}());
