const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Asset Group  Schema
const AssetGroupSchema = mongoose.Schema({
    Asset_Group: { type : String , required : true},
    Spares : {type : String , required : true},
    Company_Id: { type: Schema.Types.ObjectId, ref: 'Company_Management', required : true },
    Created_By : { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
    Last_Modified_By: { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
    Active_Status: { type : Boolean , required : true},
    If_Deleted: { type : Boolean , required : true }
    },
    { timestamps: true }
 );
 const VarAssetGroup = mongoose.model('AssetGroup', AssetGroupSchema, 'Asset_Group');

// Asset Sub Group  Schema
 const AssetSubGroupSchema = mongoose.Schema({
   Asset_Sub_Group: { type : String , required : true},
   Asset_Group_Id: { type: Schema.Types.ObjectId, ref: 'AssetGroup', required : true },
   Company_Id: { type: Schema.Types.ObjectId, ref: 'Company_Management', required : true },
   Created_By : { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
   Last_Modified_By: { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
   Active_Status: { type : Boolean , required : true},
   If_Deleted: { type : Boolean , required : true }
   },
   { timestamps: true }
);
const VarAssetSubGroup = mongoose.model('AssetSubGroup', AssetSubGroupSchema, 'Asset_Sub_Group');

// ManuFacturer  Schema
const ManufacturerSchema = mongoose.Schema({
   Manufacturer: { type : String , required : true},
   Asset_Group_Id: { type: Schema.Types.ObjectId, ref: 'AssetGroup', required : true },
   Company_Id: { type: Schema.Types.ObjectId, ref: 'Company_Management', required : true },
   Created_By : { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
   Last_Modified_By: { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
   Active_Status: { type : Boolean , required : true},
   If_Deleted: { type : Boolean , required : true }
   },
   { timestamps: true }
);
const VarManufacturer = mongoose.model('Manufacturer', ManufacturerSchema, 'Manufacturer');


// Spare Type Schema
const SpareTypeSchema = mongoose.Schema({
   Spare_Type: { type : String , required : true},
   Company_Id: { type: Schema.Types.ObjectId, ref: 'Company_Management', required : true },
   Created_By : { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
   Last_Modified_By: { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
   Active_Status: { type : Boolean , required : true},
   If_Deleted: { type : Boolean , required : true }
   },
   { timestamps: true }
);
const VarSpareType = mongoose.model('SpareType', SpareTypeSchema, 'Spare_Type');

// Model Schema 
const ModelSchema = mongoose.Schema({
   Model_Name: { type : String , required : true},
   Manufacturer_Id: { type: Schema.Types.ObjectId, ref: 'Manufacturer', required : true },
   Asset_Group_Id: { type: Schema.Types.ObjectId, ref: 'AssetGroup', required : true },
   Asset_Sub_Group_Id: { type: Schema.Types.ObjectId, ref: 'AssetSubGroup', required : true },
   Company_Id: { type: Schema.Types.ObjectId, ref: 'Company_Management', required : true },
   Created_By : { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
   Last_Modified_By: { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
   Active_Status: { type : Boolean , required : true},
   If_Deleted: { type : Boolean , required : true }
   },
   { timestamps: true }
);
const VarModel = mongoose.model('Model', ModelSchema, 'Model');

// Spare Schema 
const SparesSchema = mongoose.Schema({
   Spare_Name: { type : String , required : true},
   Spare_Type_Id: { type: Schema.Types.ObjectId, ref: 'SpareType', required : true },
   Stocable: { type : String , required : true },
   Purchaseable: { type : String , required : true },
   Description : {type : String , required : true},
   Company_Id: { type: Schema.Types.ObjectId, ref: 'Company_Management', required : true },
   Created_By : { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
   Last_Modified_By: { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
   Active_Status: { type : Boolean , required : true},
   If_Deleted: { type : Boolean , required : true }
   },
   { timestamps: true }
);
const VarSpares = mongoose.model('Spares', SparesSchema, 'Spares');


// Vendors Schema 
const VendorsSchema = mongoose.Schema({
   Vendor_Name: { type : String , required : true},
   Address: { type: String, required : true },
   Phone_Number: { type : String , required : true },
   Vendor_Email: { type : String , required : true },
   Vendor_Website : {type : String , required : true},
   GSTN: { type : String , required : true },
   Notes : {type : String , required : true},
   Company_Id: { type: Schema.Types.ObjectId, ref: 'Company_Management', required : true },
   Created_By : { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
   Last_Modified_By: { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
   Active_Status: { type : Boolean , required : true},
   If_Deleted: { type : Boolean , required : true }
   },
   { timestamps: true }
);
const VarVendors = mongoose.model('Vendors', VendorsSchema, 'Vendors');

// Asset Type  Schema
const AssetTypeSchema = mongoose.Schema({
   Asset_Type: { type : String , required : true},
   Company_Id: { type: Schema.Types.ObjectId, ref: 'Company_Management', required : true },
   Created_By : { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
   Last_Modified_By: { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
   Active_Status: { type : Boolean , required : true},
   If_Deleted: { type : Boolean , required : true }
   },
   { timestamps: true }
);
const VarAssetType = mongoose.model('AssetType', AssetTypeSchema, 'Asset_Type');

// Ownership Type Schema
const OwnershipTypeSchema = mongoose.Schema({
   Ownership_Type_Name: { type : String , required : true},
   Company_Id: { type: Schema.Types.ObjectId, ref: 'Company_Management', required : true },
   Created_By : { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
   Last_Modified_By: { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
   Active_Status: { type : Boolean , required : true},
   If_Deleted: { type : Boolean , required : true }
   },
   { timestamps: true }
);
const VarOwnershipType = mongoose.model('OwnershipType', OwnershipTypeSchema, 'Ownership_Type');

// Maintanance Stratagy  Schema
const MaintainStratagySchema = mongoose.Schema({
   Mainatanance_Stratagy: { type : String , required : true},
   Company_Id: { type: Schema.Types.ObjectId, ref: 'Company_Management', required : true },
   Created_By : { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
   Last_Modified_By: { type: Schema.Types.ObjectId, ref: 'User_Management', required : true },
   Active_Status: { type : Boolean , required : true},
   If_Deleted: { type : Boolean , required : true }
   },
   { timestamps: true }
);
const VarMaintainStratagy = mongoose.model('MaintainStratagy', MaintainStratagySchema, 'Maintain_Stratagy');

module.exports = {
    AssetGroupSchema : VarAssetGroup,
    AssetSubGroupSchema : VarAssetSubGroup,
    ManufacturerSchema : VarManufacturer,
    SpareTypeSchema : VarSpareType,
    ModelSchema : VarModel,
    SparesSchema : VarSpares,
    VendorsSchema : VarVendors,
    AssetTypeSchema : VarAssetType,
    OwnershipTypeSchema : VarOwnershipType,
    MaintainStratagySchema : VarMaintainStratagy
 };