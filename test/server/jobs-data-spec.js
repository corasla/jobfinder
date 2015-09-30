    //we require chai testing framework and store the expect reference
var expect = require('chai').expect;
    //we require the mongoose database connection framework and store a reference to it
var mongoose = require('mongoose');
    //store a reference to the Promise framework bluebird
var Promise = require('bluebird');
    //store a reference to the jobsData module
var jobsData = require('../../jobs-data.js');

var DB_ADDRESS = 'mongodb://corasla:1234qwer@ds051943.mongolab.com:51943/jobfinder';

    //remove all entries from the DB via mongoose
function resetJobs() {
    return new Promise(function(resolve, reject){
        mongoose.connection.collections['jobs'].drop(resolve, reject);
    });
}

    //localDB
//jobsData.connectDB('mongodb://localhost/jobfinder')
    //our get jobs test
describe("db get jobs", function(){
    var jobs;
        //go through the necessary steps and reset jobs, then repopulate jobs
        //from the jobsData module
        //then find and store all of the newly insterted jobs inside the jobs object
    before(function(done){
        jobsData.connectDB(DB_ADDRESS)
            .then(resetJobs)
            .then(jobsData.seedJobs)
            .then(jobsData.findJobs)
            .then(function(collection){
                jobs = collection;
                mongoose.connection.close();
                done();
            });
    });
    // after(function(){

    // })
        //self explanatory
    it("should never be empty since jobs are seeded", function(){
        expect(jobs.length).to.be.at.least(1);
    });

    it("should have a job with a title", function(){
        expect(jobs[0].title).to.not.be.empty;
    });

    it("should have a job with a description", function(){
        expect(jobs[0].description).to.not.be.empty;
    });
});


describe("db save jobs", function(){
    console.log("db saved jobs");
    var job = { title: 'Cook',
                description: 'You will be making bagels.'};
    var jobs;

    before(function(done){
        jobsData.connectDB(DB_ADDRESS)
            .then(resetJobs)
            .then(function() {return jobsData.saveJob(job)})
            .then(jobsData.findJobs)
            .then(function setJobs(collection){
                jobs = collection;
                mongoose.connection.close();
                done();
            });
    });
    // after(function(){

    // })
        //self explanatory
    it("should have one job after saving one job", function(){
        expect(jobs).to.have.length(1);
    });
});
