const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobsSchema = new Schema({
    JobType : {
        type : String,
        required : true
    },
    JobLocation : {
        type : String,
        required : true
    },
    JObSalary : {
        type : String,
        required : true
    },
    Resume : [{
        type : String,
        required : true
    }],
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
});
let JOBS = mongoose.model('Jobs',jobsSchema)
module.exports = JOBS;