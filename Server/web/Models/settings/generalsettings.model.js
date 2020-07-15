const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Location Schema
const LocationSchema = mongoose.Schema({
   Location_Name: { type : String , required : true},
   Branch: { type: String, required : true },
   Department: { type : String , required : true },
   Description : {type : String , required : true},
   Company_Id: { type: Schema.Types.ObjectId, ref: 'Company_Management', required : true },
   Created_By : { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
   Last_Modified_By: { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
   Active_Status: { type : Boolean , required : true},
   If_Deleted: { type : Boolean , required : true }
   },
    { timestamps: true }
);
const varLocation = mongoose.model('Location_DB', LocationSchema, 'Location_DB');

// Hr Employee 
var HrEmployeeSchema = mongoose.Schema({
    Employee_Name:{ type: String, required: true},
    Employee_Code:{ type: String, required: true},
    Branch: { type: String, required: true},
    Department: { type: String, required: true},
    Designation: { type: String, required: true},
    Mobile_Number: { type: String, required: true},
    Email: { type: String, required: true},
    Company_Id: { type : Schema.Types.ObjectId,ref: 'Company_Management' , required: true },
    Created_By: { type : Schema.Types.ObjectId, ref: 'User_Management' , required : true },
    Last_Modified_By: { type : Schema.Types.ObjectId, ref: 'User_Management' , required : true },
    Active_Status: { type : Boolean , required : true},
    If_Deleted: { type : Boolean , required : true },
    },
    { timestamps: true }
 );
 var VarHrEmployeeSchema = mongoose.model('HrEmployee', HrEmployeeSchema, 'Hr_Employee_List');


module.exports = {
    LocationSchema : varLocation,
    HrEmployeeSchema : VarHrEmployeeSchema
};