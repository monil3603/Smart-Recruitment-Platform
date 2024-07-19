const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interviewSchema = new Schema({
    CompanyName : {
        type : String,
        required : true
    },
    CompanyPalace : {
        type : String,
        required : true
    },
    CompanyField : {
        type : String,
        required : true
    },
    CompanyTime : {
        type : String,
        required : true
    },
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
});
let INTERVIEW = mongoose.model('Interview',interviewSchema)
module.exports = INTERVIEW