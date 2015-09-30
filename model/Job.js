    //get a mongoose refference
var mongoose = require('mongoose');
    //create the job object schema that is found in our database
var jobSchema = mongoose.Schema({
    title:{type: String},
    description:{type:String}
});
    //model that job object schema we just created
mongoose.model('Job', jobSchema);
