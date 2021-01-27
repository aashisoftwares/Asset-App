const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Asset Schema 
const AssetSchema = mongoose.Schema({
    Asset_Nick_Name: { type : String , required : true},
    Serial_Number: { type: String, required : true },
    Asset_Code: { type : String , required : true },
    Model_Id: {  type: Schema.Types.ObjectId, ref: 'Model', required : true  },
    Asset_Group_Id : { type: Schema.Types.ObjectId, ref: 'AssetGroup', required : true },
    Asset_Sub_Group_Id: {  type: Schema.Types.ObjectId, ref: 'AssetSubGroup', required : true  },
    AssManufacturer__Id : { type: Schema.Types.ObjectId, ref: 'Manufacturer', required : true },
    Location_Id : { type: Schema.Types.ObjectId, ref: 'Location_DB', required : true  },
    Purchase_Date : { type : String , required : true},
    Price : { type: String, required : true },
    Invoice_Number : { type : String , required : true },
    Vendor_Name_Id: { type : Schema.Types.ObjectId, ref: 'Vendors' , required : true },
    Warranty_period : {type : String , required : true},
    Warranty_Start_Date: { type : String , required : true },
    Warranty_End_Date : {type : String , required : true},
    Warranty_Coverage_Type : { type : String , required : true },
    Ownership_Type_Id : { type: Schema.Types.ObjectId, ref: 'OwnershipType', required : true },
    Asset_Type_Id : { type: Schema.Types.ObjectId, ref: 'AssetType', required : true },
    Maintanance_Stratagy_Id : { type: Schema.Types.ObjectId, ref: 'MaintainStratagy', required : true },
    Asset_Allocated_Id : { type: Schema.Types.ObjectId, ref: 'HrEmployee', required : true },
    Company_Id: { type: Schema.Types.ObjectId, ref: 'Company_Management', required : true },
    Created_By : { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
    Last_Modified_By: { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
    Active_Status: { type : Boolean , required : true},
    If_Deleted: { type : Boolean , required : true }
    },
    { timestamps: true }
 );
 const VarAsset = mongoose.model('Asset_Details', AssetSchema, 'Asset');



module.exports = {
    AssetSchema : VarAsset,
 };