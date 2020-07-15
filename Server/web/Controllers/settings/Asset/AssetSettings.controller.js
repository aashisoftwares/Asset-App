const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const AssetModel = require('../../../Models/settings/Asset/AssetSettings.model');
const ErrorManagement = require('../../../../handling/ErrorHandling');
const CryptoJS = require("crypto-js");


//Asset GRoup
exports.Asset_Group_Create = (req, res) => {
    const ReceivingData = req.body ;

    if (!ReceivingData.Asset_Group || ReceivingData.Asset_Group === ' ') {        
        res.status(400).send({status: false, Message: "Asset GRoup Can be Empty"});
    } else if (!ReceivingData.Company_Id || ReceivingData.Company_Id === ' ') {
        res.status(400).send({status: false, Message: "Company ID Can be Empty"});
    } else if (!ReceivingData.Created_By || ReceivingData.Created_By === ' ') {
        res.status(400).send({status: false, Message: "User Details Can be Empty"});
    } else {
        const Create_AssetGroup = new AssetModel.AssetGroupSchema({
            Asset_Group: ReceivingData.Asset_Group,
            Spares : ReceivingData.Spares,
            Company_Id: mongoose.Types.ObjectId(ReceivingData.Company_Id),
            Created_By : mongoose.Types.ObjectId(ReceivingData.Created_By),
            Last_Modified_By: mongoose.Types.ObjectId(ReceivingData.Created_By),
            Active_Status: true,
            If_Deleted: true
        });
        Create_AssetGroup.save ((err , result) => {
            if (err) {
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Group Creation Query Error', 'AssetSettings.controller.js');
                  res.status(417).send({Status: false, Message: "Some error occurred while creating Asset Group!."});
            } else {
                AssetModel.AssetGroupSchema 
                .findOne ({'_id' : result._id})
                .populate({ path: 'Created_By' , select : ['Name'] })
                .populate ({ path: 'Last_Modified_By' , select : ['Name'] })
                .exec (function (err1, result1) {
                    if (err1) {
                        ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Group Find Query Error', 'AssetSettings.controller.js', err1);
                        res.status(417).send({status: false, Message: "Some error occurred while Find Asset Group!."});
                    } else {
                        res.status(200).send({Status: true, Response: result1 });
                    }         
                });
            }

        });
    }
};


//Asset Sub GRoup
exports.Asset_Sub_Group_Create = (req, res) => {
    const ReceivingData = req.body ;

    if (!ReceivingData.Asset_Sub_Group || ReceivingData.Asset_Sub_Group === ' ') {        
        res.status(400).send({status: false, Message: "Asset Sub Group Can not be Empty"});
    } else if (!ReceivingData.Asset_Group_Id || ReceivingData.Asset_Group_Id === ' ') {
        res.status(400).send({status: false, Message: "Asset Group Can not be Empty"});
    } else if (!ReceivingData.Company_Id || ReceivingData.Company_Id === ' ') {
            res.status(400).send({status: false, Message: "Company ID Can not be Empty"});
    } else if (!ReceivingData.Created_By || ReceivingData.Created_By === ' ') {
        res.status(400).send({status: false, Message: "User Details Can not be Empty"});
    } else {
        const Create_AssetSubGroup = new AssetModel.AssetSubGroupSchema({
            Asset_Sub_Group: ReceivingData.Asset_Sub_Group,
            Asset_Group_Id: mongoose.Types.ObjectId(ReceivingData.Asset_Group_Id),
            Company_Id: mongoose.Types.ObjectId(ReceivingData.Company_Id),
            Created_By : mongoose.Types.ObjectId(ReceivingData.Created_By),
            Last_Modified_By: mongoose.Types.ObjectId(ReceivingData.Created_By),
            Active_Status: true,
            If_Deleted: true
        });
        Create_AssetSubGroup.save ((err , result) => {
            if (err) {
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Sub Group Creation Query Error', 'AssetSettings.controller.js');
                  res.status(417).send({Status: false, Message: "Some error occurred while creating Asset Sub Group!."});
            } else {
                AssetModel.AssetSubGroupSchema.findOne ({ Company_Id: mongoose.Types.ObjectId(ReceivingData.Company_Id), _id: mongoose.Types.ObjectId(result._id)},
                {},{})
                .populate({ path: 'Asset_Group_Id' , select : ['Asset_Group'] }) 
                .populate({ path: 'Created_By' , select : ['Name'] })
                .populate ({ path: 'Last_Modified_By' , select : ['Name'] })
                .exec (function (err1, result1) {
                    if (err1) {
                        ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Sub Group Find Query Error', 'AssetSettings.controller.js', err1);
                        res.status(417).send({status: false, Message: "Some error occurred while Find Asset Sub Group!."});
                    } else {
                        res.status(200).send({Status: true, Response: result1 });
                    }         
                });
            }

        });
    }
};


//Manufacturer
exports.Manufac_Create = (req, res) => {
    const ReceivingData = req.body ;

    if (!ReceivingData.Manufacturer || ReceivingData.Manufacturer === ' ') {        
        res.status(400).send({status: false, Message: "Manufacturer Can not be Empty"});
    } else if (!ReceivingData.Asset_Group_Id || ReceivingData.Asset_Group_Id === ' ') {
        res.status(400).send({status: false, Message: "Asset Group Can not be Empty"});
    } else if (!ReceivingData.Company_Id || ReceivingData.Company_Id === ' ') {
            res.status(400).send({status: false, Message: "Company ID Can not be Empty"});
    } else if (!ReceivingData.Created_By || ReceivingData.Created_By === ' ') {
        res.status(400).send({status: false, Message: "User Details Can not be Empty"});
    } else {
        const Create_Manufacturer = new AssetModel.ManufacturerSchema({
            Manufacturer: ReceivingData.Manufacturer,
            Asset_Group_Id: mongoose.Types.ObjectId(ReceivingData.Asset_Group_Id),
            Company_Id: mongoose.Types.ObjectId(ReceivingData.Company_Id),
            Created_By : mongoose.Types.ObjectId(ReceivingData.Created_By),
            Last_Modified_By: mongoose.Types.ObjectId(ReceivingData.Created_By),
            Active_Status: true,
            If_Deleted: true
        });
        Create_Manufacturer.save ((err , result) => {
            if (err) {
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Manufacturer Creation Query Error', 'AssetSettings.controller.js');
                  res.status(417).send({Status: false, Message: "Some error occurred while creating Manufacturer!."});
            } else {
                AssetModel.ManufacturerSchema.findOne ({ Company_Id: mongoose.Types.ObjectId(ReceivingData.Company_Id), _id: mongoose.Types.ObjectId(result._id)},
                {},{})
                .populate({ path: 'Asset_Group_Id' , select : ['Asset_Group'] }) 
                .populate({ path: 'Created_By' , select : ['Name'] })
                .populate ({ path: 'Last_Modified_By' , select : ['Name'] })
                .exec (function (err1, result1) {
                    if (err1) {
                        ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Manufacturer Find Query Error', 'AssetSettings.controller.js', err1);
                        res.status(417).send({status: false, Message: "Some error occurred while Find Manufacturer!."});
                    } else {
                        res.status(200).send({Status: true, Response: result1 });
                    }         
                });
            }

        });
    }
};


//Spare Types
exports.Spare_Type_Create = (req, res) => {
    const ReceivingData = req.body ;

    if (!ReceivingData.Spare_Type || ReceivingData.Spare_Type === ' ') {        
        res.status(400).send({status: false, Message: "Spare Type Can be Empty"});
    } else if (!ReceivingData.Company_Id || ReceivingData.Company_Id === ' ') {
        res.status(400).send({status: false, Message: "Company ID Can be Empty"});
    } else if (!ReceivingData.Created_By || ReceivingData.Created_By === ' ') {
        res.status(400).send({status: false, Message: "User Details Can be Empty"});
    } else {
        const Create_SpareType = new AssetModel.SpareTypeSchema({
            Spare_Type: ReceivingData.Spare_Type,
            Company_Id: mongoose.Types.ObjectId(ReceivingData.Company_Id),
            Created_By : mongoose.Types.ObjectId(ReceivingData.Created_By),
            Last_Modified_By: mongoose.Types.ObjectId(ReceivingData.Created_By),
            Active_Status: true,
            If_Deleted: true
        });
        Create_SpareType.save ((err , result) => {
            if (err) {
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Spare Type Creation Query Error', 'AssetSettings.controller.js');
                  res.status(417).send({Status: false, Message: "Some error occurred while creating Spare Type!."});
            } else {
                AssetModel.SpareTypeSchema 
                .findOne ({'_id' : result._id})
                .populate({ path: 'Created_By' , select : ['Name'] })
                .populate ({ path: 'Last_Modified_By' , select : ['Name'] })
                .exec (function (err1, result1) {
                    if (err1) {
                        ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Spare Type Find Query Error', 'AssetSettings.controller.js', err1);
                        res.status(417).send({status: false, Message: "Some error occurred while Find Spare Type!."});
                    } else {
                        res.status(200).send({Status: true, Response: result1 });
                    }         
                });
            }

        });
    }
};


//Model Create
exports.Model_Create = (req, res) => {
    const ReceivingData = req.body ;

    if (!ReceivingData.Model_Name || ReceivingData.Model_Name === ' ') {        
        res.status(400).send({status: false, Message: "Model Name Can not be Empty"});
    } else if (!ReceivingData.Manufacturer_Id || ReceivingData.Manufacturer_Id === ' ') {
        res.status(400).send({status: false, Message: "Manufacturer Can not be Empty"});
    } else if (!ReceivingData.Asset_Group_Id || ReceivingData.Asset_Group_Id === ' ') {
        res.status(400).send({status: false, Message: "Asset Group Can not be Empty"});
    } else if (!ReceivingData.Asset_Sub_Group_Id || ReceivingData.Asset_Sub_Group_Id === ' ') {
        res.status(400).send({status: false, Message: "Asset Sub Group Can not be Empty"});
    } else if (!ReceivingData.Company_Id || ReceivingData.Company_Id === ' ') {
        res.status(400).send({status: false, Message: "Company ID Can not be Empty"});
    } else {
        const Create_Model = new AssetModel.ModelSchema({
            Model_Name: ReceivingData.Model_Name,
            Manufacturer_Id: mongoose.Types.ObjectId(ReceivingData.Manufacturer_Id),
            Asset_Group_Id: mongoose.Types.ObjectId(ReceivingData.Asset_Group_Id),
            Asset_Sub_Group_Id: mongoose.Types.ObjectId(ReceivingData.Asset_Sub_Group_Id),
            Company_Id: mongoose.Types.ObjectId(ReceivingData.Company_Id),
            Created_By : mongoose.Types.ObjectId(ReceivingData.Created_By),
            Last_Modified_By: mongoose.Types.ObjectId(ReceivingData.Created_By),
            Active_Status: true,
            If_Deleted: true
        });
        Create_Model.save ((err , result) => {
            if (err) {
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Model Creation Query Error', 'AssetSettings.controller.js');
                  res.status(417).send({Status: false, Message: "Some error occurred while creating Model!."});
            } else {
                AssetModel.ModelSchema.findOne ({ Company_Id: mongoose.Types.ObjectId(ReceivingData.Company_Id), _id: mongoose.Types.ObjectId(result._id)},
                {},{})
                .populate({ path: 'Manufacturer_Id' , select : ['Manufacturer'] }) 
                .populate({ path: 'Asset_Group_Id' , select : ['Asset_Group'] }) 
                .populate({ path: 'Asset_Sub_Group_Id' , select : ['Asset_Sub_Group'] }) 
                .populate({ path: 'Created_By' , select : ['Name'] })
                .populate ({ path: 'Last_Modified_By' , select : ['Name'] })
                .exec (function (err1, result1) {
                    if (err1) {
                        ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Model Find Query Error', 'AssetSettings.controller.js', err1);
                        res.status(417).send({status: false, Message: "Some error occurred while Find Model!."});
                    } else {
                        res.status(200).send({Status: true, Response: result1 });
                    }         
                });
            }

        });
    }
};


//Spares Create
exports.Spares_Create = (req, res) => {
    const ReceivingData = req.body ;

    if (!ReceivingData.Spare_Name || ReceivingData.Spare_Name === ' ') {        
        res.status(400).send({status: false, Message: "Spare Name Can not be Empty"});
    } else if (!ReceivingData.Spare_Type_Id || ReceivingData.Spare_Type_Id === ' ') {
        res.status(400).send({status: false, Message: "Spare Type Can not be Empty"});
    } else if (!ReceivingData.Company_Id || ReceivingData.Company_Id === ' ') {
        res.status(400).send({status: false, Message: "Company ID Can not be Empty"});
    } else {
        const Create_Spares = new AssetModel.SparesSchema({
            Spare_Name: ReceivingData.Spare_Name,
            Spare_Type_Id: mongoose.Types.ObjectId(ReceivingData.Spare_Type_Id),
            Stocable: true,
            Purchaseable: true,
            Description : ReceivingData.Description,
            Company_Id: mongoose.Types.ObjectId(ReceivingData.Company_Id),
            Created_By : mongoose.Types.ObjectId(ReceivingData.Created_By),
            Last_Modified_By: mongoose.Types.ObjectId(ReceivingData.Created_By),
            Active_Status: true,
            If_Deleted: true
        });
        Create_Spares.save ((err , result) => {
            if (err) {
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Spares Creation Query Error', 'AssetSettings.controller.js');
                  res.status(417).send({Status: false, Message: "Some error occurred while creating Spares!."});
            } else {
                AssetModel.SparesSchema.findOne ({ Company_Id: mongoose.Types.ObjectId(ReceivingData.Company_Id), _id: mongoose.Types.ObjectId(result._id)},
                {},{})
                .populate({ path: 'Spare_Type_Id' , select : ['Spare_Type'] }) 
                .populate({ path: 'Created_By' , select : ['Name'] })
                .populate ({ path: 'Last_Modified_By' , select : ['Name'] })
                .exec (function (err1, result1) {
                    if (err1) {
                        ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Spares Find Query Error', 'AssetSettings.controller.js', err1);
                        res.status(417).send({status: false, Message: "Some error occurred while Find Spares!."});
                    } else {
                        res.status(200).send({Status: true, Response: result1 });
                    }         
                });
            }

        });
    }
};


//Vendors
exports.Vendors_Create = (req, res) => {
    const ReceivingData = req.body ;

    if (!ReceivingData.Vendor_Name || ReceivingData.Vendor_Name === ' ') {        
        res.status(400).send({status: false, Message: "Vendor Name Can not be Empty"});
    }else if (!ReceivingData.Address || ReceivingData.Address === ' ') {        
        res.status(400).send({status: false, Message: "Address Can not be Empty"});
    } else if (!ReceivingData.Phone_Number || ReceivingData.Phone_Number === ' ') {        
        res.status(400).send({status: false, Message: "Phone Number Can not be Empty"});
    } else if (!ReceivingData.Vendor_Email || ReceivingData.Vendor_Email === ' ') {        
        res.status(400).send({status: false, Message: "Email Can not be Empty"});
    }else if (!ReceivingData.Company_Id || ReceivingData.Company_Id === ' ') {
        res.status(400).send({status: false, Message: "Company ID Can not be Empty"});
    } else if (!ReceivingData.Created_By || ReceivingData.Created_By === ' ') {
        res.status(400).send({status: false, Message: "User Details Can not be Empty"});
    } else {
        const Create_Vendors = new AssetModel.VendorsSchema({
            Vendor_Name: ReceivingData.Vendor_Name,
            Address: ReceivingData.Address,
            Phone_Number: ReceivingData.Phone_Number,
            Vendor_Email: ReceivingData.Vendor_Email,
            Vendor_Website: ReceivingData.Vendor_Website,
            GSTN: ReceivingData.GSTN,
            Notes: ReceivingData.Notes,
            Company_Id: mongoose.Types.ObjectId(ReceivingData.Company_Id),
            Created_By : mongoose.Types.ObjectId(ReceivingData.Created_By),
            Last_Modified_By: mongoose.Types.ObjectId(ReceivingData.Created_By),
            Active_Status: true,
            If_Deleted: true
        });
        Create_Vendors.save ((err , result) => {
            if (err) {
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Vendor Creation Query Error', 'AssetSettings.controller.js');
                  res.status(417).send({Status: false, Message: "Some error occurred while creating Vendor!."});
            } else {
                AssetModel.VendorsSchema 
                .findOne ({'_id' : result._id})
                .populate({ path: 'Created_By' , select : ['Name'] })
                .populate ({ path: 'Last_Modified_By' , select : ['Name'] })
                .exec (function (err1, result1) {
                    if (err1) {
                        ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Vendor Find Query Error', 'AssetSettings.controller.js', err1);
                        res.status(417).send({status: false, Message: "Some error occurred while Find Vendor!."});
                    } else {
                        res.status(200).send({Status: true, Response: result1 });
                    }         
                });
            }

        });
    }
};

//Asset Type
exports.Asset_Type_Create = (req, res) => {
    const ReceivingData = req.body ;

    if (!ReceivingData.Asset_Type || ReceivingData.Asset_Type === ' ') {        
        res.status(400).send({status: false, Message: "Asset Type Can not be Empty"});
    } else if (!ReceivingData.Company_Id || ReceivingData.Company_Id === ' ') {
        res.status(400).send({status: false, Message: "Company ID Can not be Empty"});
    } else if (!ReceivingData.Created_By || ReceivingData.Created_By === ' ') {
        res.status(400).send({status: false, Message: "User Details Can not be Empty"});
    } else {
        const Create_AssetType = new AssetModel.AssetTypeSchema({
            Asset_Type: ReceivingData.Asset_Type,
            Company_Id: mongoose.Types.ObjectId(ReceivingData.Company_Id),
            Created_By : mongoose.Types.ObjectId(ReceivingData.Created_By),
            Last_Modified_By: mongoose.Types.ObjectId(ReceivingData.Created_By),
            Active_Status: true,
            If_Deleted: true
        });
        Create_AssetType.save ((err , result) => {
            if (err) {
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Type Creation Query Error', 'AssetSettings.controller.js');
                  res.status(417).send({Status: false, Message: "Some error occurred while creating Asset Type!."});
            } else {
                AssetModel.AssetTypeSchema 
                .findOne ({'_id' : result._id})
                .populate({ path: 'Created_By' , select : ['Name'] })
                .populate ({ path: 'Last_Modified_By' , select : ['Name'] })
                .exec (function (err1, result1) {
                    if (err1) {
                        ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Group Find Query Error', 'AssetSettings.controller.js', err1);
                        res.status(417).send({status: false, Message: "Some error occurred while Find Asset Group!."});
                    } else {
                        res.status(200).send({Status: true, Response: result1 });
                    }         
                });
            }

        });
    }
};


//Ownership Type
exports.Ownership_Type_Create = (req, res) => {
    const ReceivingData = req.body ;

    if (!ReceivingData.Ownership_Type_Name || ReceivingData.Ownership_Type_Name === ' ') {        
        res.status(400).send({status: false, Message: "Ownership Type Can not be Empty"});
    } else if (!ReceivingData.Company_Id || ReceivingData.Company_Id === ' ') {
        res.status(400).send({status: false, Message: "Company ID Can not be Empty"});
    } else if (!ReceivingData.Created_By || ReceivingData.Created_By === ' ') {
        res.status(400).send({status: false, Message: "User Details Can not be Empty"});
    } else {
        const Create_OwnershipType = new AssetModel.OwnershipTypeSchema({
            Ownership_Type_Name: ReceivingData.Ownership_Type_Name,
            Company_Id: mongoose.Types.ObjectId(ReceivingData.Company_Id),
            Created_By : mongoose.Types.ObjectId(ReceivingData.Created_By),
            Last_Modified_By: mongoose.Types.ObjectId(ReceivingData.Created_By),
            Active_Status: true,
            If_Deleted: true
        });
        Create_OwnershipType.save ((err , result) => {
            if (err) {
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Ownership Type Creation Query Error', 'AssetSettings.controller.js');
                  res.status(417).send({Status: false, Message: "Some error occurred while creating Ownership Type!."});
            } else {
                AssetModel.OwnershipTypeSchema 
                .findOne ({'_id' : result._id})
                .populate({ path: 'Created_By' , select : ['Name'] })
                .populate ({ path: 'Last_Modified_By' , select : ['Name'] })
                .exec (function (err1, result1) {
                    if (err1) {
                        ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Group Find Query Error', 'AssetSettings.controller.js', err1);
                        res.status(417).send({status: false, Message: "Some error occurred while Find Asset Group!."});
                    } else {
                        res.status(200).send({Status: true, Response: result1 });
                    }         
                });
            }

        });
    }
};


//Maintain Stratagy Type
exports.Maintain_Stratagy_Create = (req, res) => {
    const ReceivingData = req.body ;

    if (!ReceivingData.Mainatanance_Stratagy || ReceivingData.Mainatanance_Stratagy === ' ') {        
        res.status(400).send({status: false, Message: " Mainatanance Stratagy Can not be Empty"});
    } else if (!ReceivingData.Company_Id || ReceivingData.Company_Id === ' ') {
        res.status(400).send({status: false, Message: "Company ID Can not be Empty"});
    } else if (!ReceivingData.Created_By || ReceivingData.Created_By === ' ') {
        res.status(400).send({status: false, Message: "User Details Can not be Empty"});
    } else {
        const Create_Maintain_Stratagy = new AssetModel.MaintainStratagySchema({
            Mainatanance_Stratagy : ReceivingData.Mainatanance_Stratagy,
            Company_Id : mongoose.Types.ObjectId(ReceivingData.Company_Id),
            Created_By : mongoose.Types.ObjectId(ReceivingData.Created_By),
            Last_Modified_By: mongoose.Types.ObjectId(ReceivingData.Created_By),
            Active_Status: true,
            If_Deleted: true
        });
        Create_Maintain_Stratagy.save ((err , result) => {
            if (err) {
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Mainatanance Stratagy Creation Query Error', 'AssetSettings.controller.js');
                  res.status(417).send({Status: false, Message: "Some error occurred while creating Mainatanance Stratagy!."});
            } else {
                AssetModel.MaintainStratagySchema 
                .findOne ({'_id' : result._id})
                .populate({ path: 'Created_By' , select : ['Name'] })
                .populate ({ path: 'Last_Modified_By' , select : ['Name'] })
                .exec (function (err1, result1) {
                    if (err1) {
                        ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Group Find Query Error', 'AssetSettings.controller.js', err1);
                        res.status(417).send({status: false, Message: "Some error occurred while Find Asset Group!."});
                    } else {
                        res.status(200).send({Status: true, Response: result1 });
                    }         
                });
            }

        });
    }
};