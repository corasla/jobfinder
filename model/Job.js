var mongoose = require('mongoose');

var jobSchema = mongoose.Schema({
    title:{type: String},
    description:{type:String}
});

var Job = mongoose.model('Job', jobSchema);

exports.seedJobs = function(){
    Job.find({}).exec(function(error, collection){
        if(collection.length === 0)
        {
            Job.create({title:'Cook', description:'You do the cooking'});
            Job.create({title:'Cook2', description:'You 2 do the cooking'});
            Job.create({title:'Cook3', description:'You 3 do the cooking'});
            Job.create({title:'Cook4', description:'You 4 do the cooking'});
        }
    })
}
