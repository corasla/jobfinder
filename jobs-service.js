    //store a reference to the body-parser middleware
var bodyParser = require("body-parser");
    //export the db manipulation function to get and post job related data
module.exports = function(db, app){
        //make the express app use the json body parser
    app.use(bodyParser.json());

        //get jobs
    app.get('/api/jobs', function(req, res){
        db.findJobs().then(function(collection){
            res.send(collection);
        });
    });

        //post jobs
    app.post('/api/jobs', function(req, res){
        db.saveJob(req.body);
        res.end();
    });
}
