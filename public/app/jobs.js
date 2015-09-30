(function() {
    'use strict';

    angular
        .module('app')
        .factory('jobs', jobs);

        //could have used @ngInject
    jobs.$inject = ['$resource'];
    function jobs($resource) {
        return $resource('/api/jobs');
    }
}());
