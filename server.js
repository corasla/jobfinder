    //define and require 'express' and use it to create our API (api/jobs)
    //also use express to set our view engine to jade
    //and setup the actual server
var express = require('express');
    //get our jobModel
var jobModel = require('./model/Job');
    //get our jobsData and its appropriate methods (seed and find jobs)
var jobsData = require('./jobs-data.js');
    //instantiate our express framework and save its reference inside the app variable
var app = express();
    //our server requires the jobs-service.js file which defines the get and post methods on api/jobs
    //we also pass it a refference to our jobsData and to our app (express fmw)
require("./jobs-service.js")(jobsData, app);

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

    //no matter what we request, simply render the index page
app.get('*', function(req, res) {
    res.render('index');
});


    //connect our application with the database found at the specified URI, in return we get a promise of completion
// mongoose.connect('mongodb://localhost/jobfinder');
jobsData.connectDB('mongodb://corasla:1234qwer@ds051943.mongolab.com:51943/jobfinder')
    .then(function(){
        console.log("connected to mongodb successfully");
            //now that we are connected to the DB, we can go ahead and seed our jobs data
            //via the jobsData's method -> seedJobs
        jobsData.seedJobs();
    });
    //start the server by listening to specified PORT
app.listen(process.env.PORT, process.env.IP);
