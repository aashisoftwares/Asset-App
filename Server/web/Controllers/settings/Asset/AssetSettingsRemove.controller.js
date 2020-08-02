const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const AssetModel = require('../../../Models/settings/Asset/AssetSettings.model');
const ErrorManagement = require('../../../../handling/ErrorHandling');
const CryptoJS = require("crypto-js");

//Asset Group Edit
exports.Asset_Group_Remove = (req, res) => {
    const ReceivedData = req.body ;
    if(!ReceivedData.Asset_Group_Id || ReceivedData.Asset_Group_Id === '' ) {
        res.status(400).send({Status: false, Message: "Asset Group Id can not be empty" });
     }else if (!ReceivedData.Last_Modified_By || ReceivedData.Last_Modified_By === ''  ) {
        res.status(400).send({Status: false, Message: "Modified User Details can not be empty" });
     }else{
        AssetModel.AssetGroupSchema.findOne({'_id': ReceivedData.Asset_Group_Id},{},{}, (err, result)=> {
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Group Find Query Error', 'AssetSettingsEdit.controller.js', err);
                  res.status(417).send({Status: false, Error:err, Message: "Some error occurred while Find Asset Group!."});
            }else {
                if(result !== null){
                    result.If_Deleted = true;
                    result.Last_Modified_By = mongoose.Types.ObjectId(ReceivedData.Last_Modified_By);
                    result.save ((err1,result1) => {
                        if(err1) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Group Update Query Error', 'AssetSettingsEdit.controller.js');
                            res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Asset Group!."});
                         }else {
                            res.status(200).send({Status: true, Message: 'Successfully Deleted' });
                         }
                    });
                }else {
                    res.status(400).send({Status: false, Message: "Asset Group Id ID not valid!" });
                 }
            }
        });
     }
};


//Asset Sub Edit
exports.Asset_Sub_Group_Remove = (req, res) => {
    const ReceivedData = req.body ;
    if(!ReceivedData.Asset_Sub_Group_Id || ReceivedData.Asset_Sub_Group_Id === '' ) {
        res.status(400).send({Status: false, Message: "Asset Sub Group Id can not be empty" });
     }else if (!ReceivedData.Last_Modified_By || ReceivedData.Last_Modified_By === ''  ) {
        res.status(400).send({Status: false, Message: "Modified User Details can not be empty" });
     }else{
        AssetModel.AssetSubGroupSchema.findOne({'_id': ReceivedData.Asset_Sub_Group_Id},{},{}, (err, result)=> {
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Sub Group Find Query Error', 'AssetSettingsEdit.controller.js', err);
                  res.status(417).send({Status: false, Error:err, Message: "Some error occurred while Find Asset Sub Group!."});
            }else {
                if(result !== null){
                    result.If_Deleted = true;
                    result.Last_Modified_By = mongoose.Types.ObjectId(ReceivedData.Last_Modified_By);
                    result.save ((err1,result1) => {
                        if(err1) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Sub Group Update Query Error', 'AssetSettingsEdit.controller.js');
                            res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Asset Sub Group!."});
                         }else {
                            res.status(200).send({Status: true, Message: 'Successfully Deleted' });
                         }
                    });
                }else {
                    res.status(400).send({Status: false, Message: "Asset Sub Group ID not valid!" });
                 }
            }
        });
     }
};


//Manufacturer
exports.Manufac_Remove = (req, res) => {
    const ReceivedData = req.body ;
    if(!ReceivedData.Manufacturer_Id || ReceivedData.Manufacturer_Id === '' ) {
        res.status(400).send({Status: false, Message: "Asset Group Id can not be empty" });
     }else if (!ReceivedData.Last_Modified_By || ReceivedData.Last_Modified_By === ''  ) {
        res.status(400).send({Status: false, Message: "Modified User Details can not be empty" });
     }else{
        AssetModel.ManufacturerSchema.findOne({'_id': ReceivedData.Manufacturer_Id},{},{}, (err, result)=> {
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Manufacturer Find Query Error', 'AssetSettingsEdit.controller.js', err);
                  res.status(417).send({Status: false, Error:err, Message: "Some error occurred while Find Manufacturer!."});
            }else {
                if(result !== null){
                    result.If_Deleted = true;
                    result.Last_Modified_By = mongoose.Types.ObjectId(ReceivedData.Last_Modified_By);
                    result.save ((err1,result1) => {
                        if(err1) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Manufacturer Update Query Error', 'AssetSettingsEdit.controller.js');
                            res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Manufacturer!."});
                         }else {
                            res.status(200).send({Status: true, Message: 'Successfully Deleted' });
                         }
                    });
                }else {
                    res.status(400).send({Status: false, Message: "Manufacturer ID not valid!" });
                 }
            }
        });
     }
};


//Spare Types
exports.Spare_Type_Remove = (req, res) => {
    const ReceivedData = req.body ;
    if(!ReceivedData.Spare_Type_Id || ReceivedData.Spare_Type_Id === '' ) {
        res.status(400).send({Status: false, Message: "Spare_Type Id can not be empty" });
     }else if (!ReceivedData.Last_Modified_By || ReceivedData.Last_Modified_By === ''  ) {
        res.status(400).send({Status: false, Message: "Modified User Details can not be empty" });
     }else{
        AssetModel.SpareTypeSchema.findOne({'_id': ReceivedData.Spare_Type_Id},{},{}, (err, result)=> {
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Spare_Type Find Query Error', 'AssetSettingsEdit.controller.js', err);
                  res.status(417).send({Status: false, Error:err, Message: "Some error occurred while Find Spare_Type!."});
            }else {
                if(result !== null){
                    result.If_Deleted = true;
                    result.Last_Modified_By = mongoose.Types.ObjectId(ReceivedData.Last_Modified_By);
                    result.save ((err1,result1) => {
                        if(err1) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Spare_Type Update Query Error', 'AssetSettingsEdit.controller.js');
                            res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Spare_Type!."});
                         }else {
                            res.status(200).send({Status: true, Message: 'Successfully Deleted' });
                         }
                    });
                }else {
                    res.status(400).send({Status: false, Message: "Spare_Type ID not valid!" });
                 }
            }
        });
     }
};


//Model Create
exports.Model_Remove = (req, res) => {
    const ReceivedData = req.body ;
    if(!ReceivedData.Model_Name_Id || ReceivedData.Model_Name_Id === '' ) {
        res.status(400).send({Status: false, Message: "Model_Name Id can not be empty" });
     }else if (!ReceivedData.Last_Modified_By || ReceivedData.Last_Modified_By === ''  ) {
        res.status(400).send({Status: false, Message: "Modified User Details can not be empty" });
     }else{
        AssetModel.ModelSchema.findOne({'_id': ReceivedData.Model_Name_Id},{},{}, (err, result)=> {
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Model_Name Find Query Error', 'AssetSettingsEdit.controller.js', err);
                  res.status(417).send({Status: false, Error:err, Message: "Some error occurred while Find Model_Name!."});
            }else {
                if(result !== null){
                    result.If_Deleted = true;
                    result.Last_Modified_By = mongoose.Types.ObjectId(ReceivedData.Last_Modified_By);
                    result.save ((err1,result1) => {
                        if(err1) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Model_Name Update Query Error', 'AssetSettingsEdit.controller.js');
                            res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Model_Name!."});
                         }else {
                            res.status(200).send({Status: true, Message: 'Successfully Deleted' });
                         }
                    });
                }else {
                    res.status(400).send({Status: false, Message: "Model_Name ID not valid!" });
                 }
            }
        });
     }
};


//Spares Create
exports.Spares_Remove= (req, res) => {
    const ReceivedData = req.body ;
    if(!ReceivedData.Spare_Name_Id || ReceivedData.Spare_Name_Id === '' ) {
        res.status(400).send({Status: false, Message: "Spare_Name Id can not be empty" });
     }else if (!ReceivedData.Last_Modified_By || ReceivedData.Last_Modified_By === ''  ) {
        res.status(400).send({Status: false, Message: "Modified User Details can not be empty" });
     }else{
        AssetModel.SparesSchema.findOne({'_id': ReceivedData.Spare_Name_Id},{},{}, (err, result)=> {
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Spare_Name Find Query Error', 'AssetSettingsEdit.controller.js', err);
                  res.status(417).send({Status: false, Error:err, Message: "Some error occurred while Find Spare_Name!."});
            }else {
                if(result !== null){
                    result.If_Deleted = true;
                    result.Last_Modified_By = mongoose.Types.ObjectId(ReceivedData.Last_Modified_By);
                    result.save ((err1,result1) => {
                        if(err1) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Spare_Name Update Query Error', 'AssetSettingsEdit.controller.js');
                            res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Spare_Name!."});
                         }else {
                            res.status(200).send({Status: true, Message: 'Successfully Deleted' });
                         }
                    });
                }else {
                    res.status(400).send({Status: false, Message: "Spare_Name ID not valid!" });
                 }
            }
        });
     }
};


//Vendors
exports.Vendors_Remove = (req, res) => {
    const ReceivedData = req.body ;
    if(!ReceivedData.Vendor_Name_Id || ReceivedData.Vendor_Name_Id === '' ) {
        res.status(400).send({Status: false, Message: "Vendor_Name Id can not be empty" });
     }else if (!ReceivedData.Last_Modified_By || ReceivedData.Last_Modified_By === ''  ) {
        res.status(400).send({Status: false, Message: "Modified User Details can not be empty" });
     }else{
        AssetModel.VendorsSchema.findOne({'_id': ReceivedData.Vendor_Name_Id},{},{}, (err, result)=> {
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Vendor_Name Find Query Error', 'AssetSettingsEdit.controller.js', err);
                  res.status(417).send({Status: false, Error:err, Message: "Some error occurred while Find Vendor_Name!."});
            }else {
                if(result !== null){
                    result.If_Deleted = true;
                    result.Last_Modified_By = mongoose.Types.ObjectId(ReceivedData.Last_Modified_By);
                    result.save ((err1,result1) => {
                        if(err1) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Vendor_NameUpdate Query Error', 'AssetSettingsEdit.controller.js');
                            res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Vendor_Name!."});
                         }else {
                            res.status(200).send({Status: true, Message: 'Successfully Deleted' });
                         }
                    });
                }else {
                    res.status(400).send({Status: false, Message: "Vendor_Name ID not valid!" });
                 }
            }
        });
     }
};

//Asset Type
exports.Asset_Type_Remove = (req, res) => {
    const ReceivedData = req.body ;
    if(!ReceivedData.Asset_Type_Id || ReceivedData.Asset_Type_Id === '' ) {
        res.status(400).send({Status: false, Message: "Asset_Type Id can not be empty" });
     }else if (!ReceivedData.Last_Modified_By || ReceivedData.Last_Modified_By === ''  ) {
        res.status(400).send({Status: false, Message: "Modified User Details can not be empty" });
     }else{
        AssetModel.AssetTypeSchema.findOne({'_id': ReceivedData.Asset_Type_Id},{},{}, (err, result)=> {
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset_Type Find Query Error', 'AssetSettingsEdit.controller.js', err);
                  res.status(417).send({Status: false, Error:err, Message: "Some error occurred while Find Asset_Type!."});
            }else {
                if(result !== null){
                    result.If_Deleted = true;
                    result.Last_Modified_By = mongoose.Types.ObjectId(ReceivedData.Last_Modified_By);
                    result.save ((err1,result1) => {
                        if(err1) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset_Type Update Query Error', 'AssetSettingsEdit.controller.js');
                            res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Asset_Type!."});
                         }else {
                            res.status(200).send({Status: true, Message: 'Successfully Deleted' });
                         }
                    });
                }else {
                    res.status(400).send({Status: false, Message: "Asset_Type ID not valid!" });
                 }
            }
        });
     }
};


//Ownership Type
exports.Ownership_Type_Remove= (req, res) => {
    const ReceivedData = req.body ;
    if(!ReceivedData.Ownership_Type_Id || ReceivedData.Ownership_Type_Id === '' ) {
        res.status(400).send({Status: false, Message: "Ownership Type Id can not be empty" });
     }else if (!ReceivedData.Last_Modified_By || ReceivedData.Last_Modified_By === ''  ) {
        res.status(400).send({Status: false, Message: "Modified User Details can not be empty" });
     }else{
        AssetModel.OwnershipTypeSchema.findOne({'_id': ReceivedData.Ownership_Type_Id},{},{}, (err, result)=> {
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'OwnershipType Find Query Error', 'AssetSettingsEdit.controller.js', err);
                  res.status(417).send({Status: false, Error:err, Message: "Some error occurred while Find OwnershipType!."});
            }else {
                if(result !== null){
                    result.If_Deleted = true;
                    result.Last_Modified_By = mongoose.Types.ObjectId(ReceivedData.Last_Modified_By);
                    result.save ((err1,result1) => {
                        if(err1) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'OwnershipType Update Query Error', 'AssetSettingsEdit.controller.js');
                            res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update OwnershipType!."});
                         }else {
                            res.status(200).send({Status: true, Message: 'Successfully Deleted' });
                         }
                    });
                }else {
                    res.status(400).send({Status: false, Message: "OwnershipType ID not valid!" });
                 }
            }
        });
     }
};


//Maintain Stratagy Type
exports.Maintain_Stratagy_Remove = (req, res) => {
    const ReceivedData = req.body ;
    if(!ReceivedData.Mainatanance_Stratagy_Id || ReceivedData.Mainatanance_Stratagy_Id === '' ) {
        res.status(400).send({Status: false, Message: "Mainatanance_Stratagy Id can not be empty" });
     }else if (!ReceivedData.Last_Modified_By || ReceivedData.Last_Modified_By === ''  ) {
        res.status(400).send({Status: false, Message: "Modified User Details can not be empty" });
     }else{
        AssetModel.MaintainStratagySchema.findOne({'_id': ReceivedData.Mainatanance_Stratagy_Id},{},{}, (err, result)=> {
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Mainatanance_Stratagy Find Query Error', 'AssetSettingsEdit.controller.js', err);
                  res.status(417).send({Status: false, Error:err, Message: "Some error occurred while Find Mainatanance_Stratagy!."});
            }else {
                if(result !== null){
                    result.If_Deleted = true;
                    result.Last_Modified_By = mongoose.Types.ObjectId(ReceivedData.Last_Modified_By);
                    result.save ((err1,result1) => {
                        if(err1) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Mainatanance_Stratagy Update Query Error', 'AssetSettingsEdit.controller.js');
                            res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Mainatanance_Stratagy!."});
                         }else {
                            res.status(200).send({Status: true, Message: 'Successfully Deleted' });
                         }
                    });
                }else {
                    res.status(400).send({Status: false, Message: "Mainatanance_Stratagy ID not valid!" });
                 }
            }
        });
     }
};