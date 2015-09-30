var mongoose = require('mongoose');
var Promise = require('bluebird');
var jobRefRequirement = require('./model/Job.js');
var Job = mongoose.model('Job');

var createJob = Promise.promisify(Job.create, Job);

var findJobs = function(query){
    return Promise.cast(Job.find(query).exec());
};

var jobs = [
    {title:'Supervisor cook 1', description:'No 1 is the supervisor'},
    {title:'Employee 2', description:'You 2 do the cooking'},
    {title:'Employee3', description:'You 3 do the cooking'},
    {title:'Employee4', description:'You 4 do the cooking'},
    {title:'Employee5', description:'You 5 do the cooking'},
    {title:'Employee6', description:'You 6 do the cooking'}
];


exports.findJobs = findJobs;
exports.connectDB = Promise.promisify(mongoose.connect, mongoose);
exports.saveJob = createJob;
exports.seedJobs = function(){
        return findJobs({}).then(function(collection){
            if(collection.length === 0)
            {
                return Promise.map(jobs, function(job){
                    return createJob(job);
                });
            }
        });
}
