const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const AssetCreateModel = require('../../Models/Asset/Asset.model');
const ErrorManagement = require('../../../handling/ErrorHandling');
const CryptoJS = require("crypto-js");

//Asset Create
exports.Asset_Create = (req, res) => {
    const ReceivingData = req.body ;

    if (!ReceivingData.Asset_Nick_Name || ReceivingData.Asset_Nick_Name === ' ') {        
        res.status(400).send({Status: false, Message: "Asset Name Can not be Empty"});
    } else if (!ReceivingData.Serial_Number || ReceivingData.Serial_Number === ' ') {
        res.status(400).send({Status: false, Message: "Serial NUmber Can not be Empty"});
    } else if (!ReceivingData.Asset_Code || ReceivingData.Asset_Code === ' ') {
        res.status(400).send({Status: false, Message: "Asset Code Can not be Empty"});
    } else if (!ReceivingData.Model_Id || ReceivingData.Model_Id === ' ') {
        res.status(400).send({Status: false, Message: "Asset Model Can not be Empty"});
    } else if (!ReceivingData.Asset_Group_Id || ReceivingData.Asset_Group_Id === ' ') {
        res.status(400).send({Status: false, Message: "Asset Group Can not be Empty"});
    } else if (!ReceivingData.Asset_Sub_Group_Id || ReceivingData.Asset_Sub_Group_Id === ' ') {
        res.status(400).send({Status: false, Message: "Asset Sub Group Can not be Empty"});
    } else if (!ReceivingData.AssManufacturer__Id || ReceivingData.AssManufacturer__Id === ' ') {
        res.status(400).send({Status: false, Message: "Manufacturer Can not be Empty"});
    } else if (!ReceivingData.Location_Id || ReceivingData.Location_Id === ' ') {
        res.status(400).send({Status: false, Message: "Asset Location Can not be Empty"});
    } else if (!ReceivingData.Company_Id || ReceivingData.Company_Id === ' ') {
        res.status(400).send({Status: false, Message: "Company ID Can not be Empty"});
    } else if (!ReceivingData.Created_By || ReceivingData.Created_By === ' ') {
        res.status(400).send({Status: false, Message: "User Details Can not be Empty"});
    } else {
        const Create_AssetAdd = new AssetCreateModel.AssetSchema({
            Asset_Nick_Name: ReceivingData.Asset_Nick_Name,
            Serial_Number: ReceivingData.Serial_Number,
            Asset_Code: ReceivingData.Asset_Code,
            Model_Id : mongoose.Types.ObjectId(ReceivingData.Model_Id),
            Asset_Group_Id: mongoose.Types.ObjectId(ReceivingData.Asset_Group_Id),
            Asset_Sub_Group_Id: mongoose.Types.ObjectId(ReceivingData.Asset_Sub_Group_Id),
            AssManufacturer__Id : mongoose.Types.ObjectId(ReceivingData.AssManufacturer__Id),
            Location_Id: mongoose.Types.ObjectId(ReceivingData.Location_Id),
            Purchase_Date: ReceivingData.Purchase_Date,
            Price : ReceivingData.Price,
            Invoice_Number: ReceivingData.Invoice_Number,
            Vendor_Name_Id: ReceivingData.Vendor_Name_Id,
            Warranty_period : ReceivingData.Warranty_period,
            Warranty_Start_Date : ReceivingData.Warranty_Start_Date,
            Warranty_End_Date : ReceivingData.Warranty_End_Date,
            Warranty_Coverage_Type : ReceivingData.Warranty_Coverage_Type,
            Ownership_Type_Id : mongoose.Types.ObjectId(ReceivingData.Ownership_Type_Id),
            Asset_Type_Id : mongoose.Types.ObjectId(ReceivingData.Asset_Type_Id),
            Maintanance_Stratagy_Id: mongoose.Types.ObjectId(ReceivingData.Maintanance_Stratagy_Id),
            Asset_Allocated_Id : mongoose.Types.ObjectId(ReceivingData.Asset_Allocated_Id),
            Company_Id: mongoose.Types.ObjectId(ReceivingData.Company_Id),
            Created_By : mongoose.Types.ObjectId(ReceivingData.Created_By),
            Last_Modified_By: mongoose.Types.ObjectId(ReceivingData.Created_By),
            Active_Status: true,
            If_Deleted: false
        });
        Create_AssetAdd.save ((err , result) => {
            if (err) {
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Type Creation Query Error', 'AssetSettings.controller.js');
                  res.status(417).send({Status: false, Message: "Some error occurred while creating Asset Type!."});
            } else {
                AssetCreateModel.AssetSchema.findOne ({ Company_Id: mongoose.Types.ObjectId(ReceivingData.Company_Id), _id: mongoose.Types.ObjectId(result._id)},
                {},{})
                .populate({ path: 'Model_Id' , select : ['Model_Name'] }) 
                .populate({ path: 'Asset_Group_Id' , select : ['Asset_Group'] })
                .populate({ path: 'Asset_Sub_Group_Id' , select : ['Asset_Sub_Group'] }) 
                .populate({ path: 'AssManufacturer__Id' , select : ['Manufacturer'] }) 
                .populate({ path: 'Location_Id' , select : ['Asset_Group'] }) 
                .populate({ path: 'Vendor_Name_Id' , select : ['Vendor_Name'] }) 
                .populate({ path: 'Ownership_Type_Id' , select : ['Ownership_Type_Name'] }) 
                .populate({ path: 'Asset_Type_Id' , select : ['Asset_Type'] })
                .populate({ path: 'Maintanance_Stratagy_Id' , select : ['Mainatanance_Stratagy'] })
                .populate({ path: 'Asset_Allocated_Id' , select : ['Employee_Name'] })
                .populate({ path: 'Created_By' , select : ['Name'] })
                .populate ({ path: 'Last_Modified_By' , select : ['Name'] })
                .exec (function (err1, result1) {
                    if (err1) {
                        ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Find Query Error', 'AssetSettings.controller.js', err1);
                        res.status(417).send({Status: false, Message: "Some error occurred while Find Asset!."});
                    } else {
                        res.status(200).send({Status: true, Response: result1 });
                    }         
                });
            }

        });
    }
};


//Asset List
exports.Asset_List = (req, res) => {
    AssetCreateModel.AssetSchema.find({})
    .exec ((err, result) => {
        if (err){
            console.log ("Unable to Fetch Data");
        }else {
            res.json(result);
        }
    });
};