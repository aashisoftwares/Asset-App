const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Service Schema 
const ServiceSchema = mongoose.Schema({
    Req_By: { type : String , required : true},
    Req_Num: { type : String , required : true},
    Problem_Description: { type : String , required : true},
    priority: { type : String , required : true},
    severity: { type : String , required : true},
    Req_Status : {type : String , required : true},
    Asset_ID: { type: Schema.Types.ObjectId, ref: 'Asset_Details', required : true },
    Company_Id: { type: Schema.Types.ObjectId, ref: 'Company_Management', required : true },
    Created_By : { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
    Last_Modified_By: { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
    Active_Status: { type : Boolean , required : true},
    If_Deleted: { type : Boolean , required : true }
    },
    { timestamps: true }
 );
 const VarService = mongoose.model('Service_Details', ServiceSchema, 'Service_Details');

 // Service Activity Schema 
const ActivitySchema = mongoose.Schema({
    Worked_By: { type : String , required : true},
    Start_date: { type : String , required : true},
    Start_Time: { type : String , required : true},
    End_Date: { type : String , required : true},
    End_Time: { type : String , required : true},
    Remarks: { type : String , required : true},
    Functional_Status: { type : String , required : true},
    Req_ID: { type: Schema.Types.ObjectId, ref: 'Service_Details', required : true },
    Company_Id: { type: Schema.Types.ObjectId, ref: 'Company_Management', required : true },
    Created_By : { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
    Active_Status: { type : Boolean , required : true},
    If_Deleted: { type : Boolean , required : true }
    },
    { timestamps: true }
 );
 const VarServiceActivity = mongoose.model('Service_Activity_Details', ActivitySchema, 'Service_Activity_Details');


module.exports = {
    ServiceSchema : VarService,
    ServiceActivitySchema : VarServiceActivity
 };