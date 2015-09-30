    // store a new reference to the express framework
var express = require("express");
    //instantiate and store a reference to 'express'
var app = express();
    //make a reference to the chai.expect method
var expect = require("chai").expect;
    //make and store a reference to the 'supertest' testing framework
var request = require("supertest");
    //make and store a reference to the 'bluebird' Promise framework
var Promise = require("bluebird");
    //saved jobs data
var dataSavedJob;
    //a mockup of our jobs' database
var db = {
    findJobs: function(){
        return new Promise(function(resolve, reject){
            resolve(["hi"]);
        })
    },
    saveJob: function(job){
        dataSavedJob = job;
    }
};
    //get a reference to the jobs-service module and call it with the db mockup and app ('express') reference
var jobService = require("../../jobs-service")(db, app);
    //get jobs test
describe("get jobs", function(){
    it("get should give me a json list of jobs", function(done){
        request(app).get('/api/jobs')
        .expect('Content-Type', /json/)
        .end(function(err, res){
            expect(res.body).to.be.a('Array');
            done();
        })
    });
})
    //save jobs test
describe("save jobs", function(){
        //a simple mockup of a new job object
    var newJob = {title:'Supervisor cook 1', description:'No 1 is the supervisor'};

    it("should validate that title is greater than 4 characters", function(done){
        expect(newJob.title).to.have.length.above(4);
        done();
    });

    it("should validate that title is less than 40 characters", function(done){
        expect(newJob.title).to.have.length.below(40);
        done();
    });
    it("should validate that description is greater than 4 characters", function(done){
        expect(newJob.description).to.have.length.above(4);
        done();
    });
    it("should validate that description is less than 250 characters", function(done){
        expect(newJob.description).to.have.length.above(4);
        done();
    });

    it("should pass the job to the database save", function(done){
        request(app).post('/api/jobs').send(newJob).end(function(err, res){
            expect(dataSavedJob).to.deep.equal(newJob);
            done();
        })
    });

    //for me to do later
    it("should return a status of 200 to the front end if the database saved");
    it("should return a job with an id");
    it("should return an error if the database failed");
});
