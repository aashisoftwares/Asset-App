const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanyManagementSchema = mongoose.Schema({
    Company_Name: { type : String , unique: true, required : true },
    D_No: { type : String, required : true },
    Street : { type : String , required : true },
    Area : { type : String , required : true },
    City: { type : String , required : true },
    State: { type : String,  required : true },
    Country: { type : Object, required : true }, 
    zip: { type : String , required : true},
    Company_Phone : { type : String , required : true },
    Company_Email: { type : String , required : true },
    Company_Website: { type : String },
    Company_Type: { type : String },
    Company_Registry: { type : String },
    Company_TypeOfBusiness: { type : String }
    },
    { timestamps: true }
);

const UserManagementSchema = mongoose.Schema({
    User_Name: { type : String , unique: true, required : true },
    User_Password: { type : String, required : true,  },
    Name: { type : String , required : true },
    Phone : { type : String},
    Email: { type : String , required : true },
    If_Admin: { type : Boolean, required : true },
    Company_Id: { type: Schema.Types.ObjectId},
    Active_Status: { type : Boolean, required : true }
    },
    { timestamps: true }
 );
 
const varCompany_Management = mongoose.model('Company_Management', CompanyManagementSchema, 'Company_Management');
const VarUser_Management = mongoose.model('User_Management', UserManagementSchema, 'User_Management');

module.exports = {
    Company_Management : varCompany_Management,
    User_Management : VarUser_Management,
};