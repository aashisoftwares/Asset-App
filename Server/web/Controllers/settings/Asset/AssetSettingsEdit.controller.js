const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const AssetModel = require('../../../Models/settings/Asset/AssetSettings.model');
const ErrorManagement = require('../../../../handling/ErrorHandling');
const CryptoJS = require("crypto-js");

//Asset Group Edit
exports.Asset_Group_Edit = (req, res) => {
    const ReceivedData = req.body ;
    if(!ReceivedData.Asset_Group_Id || ReceivedData.Asset_Group_Id === '' ) {
        res.status(400).send({Status: false, Message: "Asset Group Id can not be empty" });
     }else if(!ReceivedData.Asset_Group || ReceivedData.Asset_Group === '' ) {
        res.status(400).send({Status: false, Message: "Asset Group Name can not be empty" });
     } else if (!ReceivedData.Last_Modified_By || ReceivedData.Last_Modified_By === ''  ) {
        res.status(400).send({Status: false, Message: "Modified User Details can not be empty" });
     }else{
        AssetModel.AssetGroupSchema.findOne({'_id': ReceivedData.Asset_Group_Id},{},{}, (err, result)=> {
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Group Find Query Error', 'AssetSettingsEdit.controller.js', err);
                  res.status(417).send({status: false, Error:err, Message: "Some error occurred while Find Asset Group!."});
            }else {
                if(result !== null){
                    result.Asset_Group = ReceivedData.Asset_Group;
                    result.Last_Modified_By = mongoose.Types.ObjectId(ReceivedData.Last_Modified_By);
                    result.save ((err1,result1) => {
                        if(err1) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Group Update Query Error', 'AssetSettingsEdit.controller.js');
                            res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Asset Group!."});
                         }else {
                            AssetModel.AssetGroupSchema
                            .findOne({'_id': result1._id})
                            .populate({ path: 'Created_By', select: ['Name'] })
                            .populate({ path: 'Last_Modified_By', select: ['Name'] })
                            .exec((err2,result2) => {
                                if(err2) {
                                    ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Group Find Query Error', 'AssetSettingsEdit.controller.js', err2);
                                    res.status(417).send({status: false, Message: "Some error occurred while Find Asset Group!."});
                                }else {
                                    var Result = (result2);
                                    res.status(200).send({Status: true, Response: Result });
                                }
                            })
                         }
                    });
                }else {
                    res.status(400).send({Status: false, Message: "Asset Group not valid!" });
                 }
            }
        });
     }
};


//Asset Sub Edit
exports.Asset_Sub_Group_Edit = (req, res) => {
    const ReceivedData = req.body ;
    if(!ReceivedData.Asset_Sub_Group_Id || ReceivedData.Asset_Sub_Group_Id === '' ) {
        res.status(400).send({Status: false, Message: "Asset Sub Group Id can not be empty" });
     }else if(!ReceivedData.Asset_Sub_Group || ReceivedData.Asset_Sub_Group === '' ) {
        res.status(400).send({Status: false, Message: "Asset Group Name can not be empty" });
     } else if (!ReceivedData.Last_Modified_By || ReceivedData.Last_Modified_By === ''  ) {
        res.status(400).send({Status: false, Message: "Modified User Details can not be empty" });
     }else{
        AssetModel.AssetSubGroupSchema.findOne({'_id': ReceivedData.Asset_Sub_Group_Id},{},{}, (err, result)=> {
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Sub Group Find Query Error', 'AssetSettingsEdit.controller.js', err);
                  res.status(417).send({status: false, Error:err, Message: "Some error occurred while Find Asset Sub Group!."});
            }else {
                if(result !== null){
                    result.Asset_Sub_Group = ReceivedData.Asset_Sub_Group;
                    result.Last_Modified_By = mongoose.Types.ObjectId(ReceivedData.Last_Modified_By);
                    result.save ((err1,result1) => {
                        if(err1) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Sub Group Update Query Error', 'AssetSettingsEdit.controller.js');
                            res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Asset Sub Group!."});
                         }else {
                            AssetModel.AssetSubGroupSchema
                            .findOne({'_id': result1._id})
                            .populate({ path: 'Created_By', select: ['Name'] })
                            .populate({ path: 'Last_Modified_By', select: ['Name'] })
                            .exec((err2,result2) => {
                                if(err2) {
                                    ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Sub Group Find Query Error', 'AssetSettingsEdit.controller.js', err2);
                                    res.status(417).send({status: false, Message: "Some error occurred while Find Asset Sub Group!."});
                                }else {
                                    var Result = (result2);
                                    res.status(200).send({Status: true, Response: Result });
                                }
                            })
                         }
                    });
                }else {
                    res.status(400).send({Status: false, Message: "Asset Sub Group not valid!" });
                 }
            }
        });
     }
};


//Manufacturer
exports.Manufac_Edit = (req, res) => {
    const ReceivedData = req.body ;
    if(!ReceivedData.Manufacturer_Id || ReceivedData.Manufacturer_Id === '' ) {
        res.status(400).send({Status: false, Message: "Asset Group Id can not be empty" });
     }else if(!ReceivedData.Manufacturer || ReceivedData.Manufacturer === '' ) {
        res.status(400).send({Status: false, Message: "Asset Group Name can not be empty" });
     } else if (!ReceivedData.Last_Modified_By || ReceivedData.Last_Modified_By === ''  ) {
        res.status(400).send({Status: false, Message: "Modified User Details can not be empty" });
     }else{
        AssetModel.ManufacturerSchema.findOne({'_id': ReceivedData.Manufacturer_Id},{},{}, (err, result)=> {
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Manufacturer Find Query Error', 'AssetSettingsEdit.controller.js', err);
                  res.status(417).send({status: false, Error:err, Message: "Some error occurred while Find Manufacturer!."});
            }else {
                if(result !== null){
                    result.Manufacturer = ReceivedData.Manufacturer;
                    result.Last_Modified_By = mongoose.Types.ObjectId(ReceivedData.Last_Modified_By);
                    result.save ((err1,result1) => {
                        if(err1) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Manufacturer Update Query Error', 'AssetSettingsEdit.controller.js');
                            res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Manufacturer!."});
                         }else {
                            AssetModel.ManufacturerSchema
                            .findOne({'_id': result1._id})
                            .populate({ path: 'Created_By', select: ['Name'] })
                            .populate({ path: 'Last_Modified_By', select: ['Name'] })
                            .exec((err2,result2) => {
                                if(err2) {
                                    ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'ManufacturerFind Query Error', 'AssetSettingsEdit.controller.js', err2);
                                    res.status(417).send({status: false, Message: "Some error occurred while Find Manufacturer!."});
                                }else {
                                    var Result = (result2);
                                    res.status(200).send({Status: true, Response: Result });
                                }
                            })
                         }
                    });
                }else {
                    res.status(400).send({Status: false, Message: "Manufacturer not valid!" });
                 }
            }
        });
     }
};


//Spare Types
exports.Spare_Type_Edit = (req, res) => {
    const ReceivedData = req.body ;
    if(!ReceivedData.Spare_Type_Id || ReceivedData.Spare_Type_Id === '' ) {
        res.status(400).send({Status: false, Message: "Spare_Type Id can not be empty" });
     }else if(!ReceivedData.Spare_Type || ReceivedData.Spare_Type === '' ) {
        res.status(400).send({Status: false, Message: "Spare_Type Name can not be empty" });
     } else if (!ReceivedData.Last_Modified_By || ReceivedData.Last_Modified_By === ''  ) {
        res.status(400).send({Status: false, Message: "Modified User Details can not be empty" });
     }else{
        AssetModel.SpareTypeSchema.findOne({'_id': ReceivedData.Spare_Type_Id},{},{}, (err, result)=> {
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Spare_Type Find Query Error', 'AssetSettingsEdit.controller.js', err);
                  res.status(417).send({status: false, Error:err, Message: "Some error occurred while Find Spare_Type!."});
            }else {
                if(result !== null){
                    result.Spare_Type = ReceivedData.Spare_Type;
                    result.Last_Modified_By = mongoose.Types.ObjectId(ReceivedData.Last_Modified_By);
                    result.save ((err1,result1) => {
                        if(err1) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Spare_Type Update Query Error', 'AssetSettingsEdit.controller.js');
                            res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Spare_Type!."});
                         }else {
                            AssetModel.SpareTypeSchema
                            .findOne({'_id': result1._id})
                            .populate({ path: 'Created_By', select: ['Name'] })
                            .populate({ path: 'Last_Modified_By', select: ['Name'] })
                            .exec((err2,result2) => {
                                if(err2) {
                                    ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Spare_TypeFind Query Error', 'AssetSettingsEdit.controller.js', err2);
                                    res.status(417).send({status: false, Message: "Some error occurred while Find Spare_Type!."});
                                }else {
                                    var Result = (result2);
                                    res.status(200).send({Status: true, Response: Result });
                                }
                            })
                         }
                    });
                }else {
                    res.status(400).send({Status: false, Message: "Spare_Type not valid!" });
                 }
            }
        });
     }
};


//Model Create
exports.Model_Edit = (req, res) => {
    const ReceivedData = req.body ;
    if(!ReceivedData.Model_Name_Id || ReceivedData.Model_Name_Id === '' ) {
        res.status(400).send({Status: false, Message: "Model_Name Id can not be empty" });
     }else if(!ReceivedData.Model_Name || ReceivedData.Model_Name === '' ) {
        res.status(400).send({Status: false, Message: "Model_Name Name can not be empty" });
     } else if (!ReceivedData.Last_Modified_By || ReceivedData.Last_Modified_By === ''  ) {
        res.status(400).send({Status: false, Message: "Modified User Details can not be empty" });
     }else{
        AssetModel.ModelSchema.findOne({'_id': ReceivedData.Model_Name_Id},{},{}, (err, result)=> {
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Model_Name Find Query Error', 'AssetSettingsEdit.controller.js', err);
                  res.status(417).send({status: false, Error:err, Message: "Some error occurred while Find Model_Name!."});
            }else {
                if(result !== null){
                    result.Model_Name = ReceivedData.Model_Name;
                    result.Last_Modified_By = mongoose.Types.ObjectId(ReceivedData.Last_Modified_By);
                    result.save ((err1,result1) => {
                        if(err1) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Model_Name Update Query Error', 'AssetSettingsEdit.controller.js');
                            res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Model_Name!."});
                         }else {
                            AssetModel.ModelSchema
                            .findOne({'_id': result1._id})
                            .populate({ path: 'Created_By', select: ['Name'] })
                            .populate({ path: 'Last_Modified_By', select: ['Name'] })
                            .exec((err2,result2) => {
                                if(err2) {
                                    ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Model_Name Find Query Error', 'AssetSettingsEdit.controller.js', err2);
                                    res.status(417).send({status: false, Message: "Some error occurred while Find Model_Name!."});
                                }else {
                                    var Result = (result2);
                                    res.status(200).send({Status: true, Response: Result });
                                }
                            })
                         }
                    });
                }else {
                    res.status(400).send({Status: false, Message: "Model_Name not valid!" });
                 }
            }
        });
     }
};


//Spares Create
exports.Spares_Edit = (req, res) => {
    const ReceivedData = req.body ;
    if(!ReceivedData.Spare_Name_Id || ReceivedData.Spare_Name_Id === '' ) {
        res.status(400).send({Status: false, Message: "Spare_Name Id can not be empty" });
     }else if(!ReceivedData.Spare_Name || ReceivedData.Spare_Name === '' ) {
        res.status(400).send({Status: false, Message: "Spare_Name  can not be empty" });
     } else if (!ReceivedData.Last_Modified_By || ReceivedData.Last_Modified_By === ''  ) {
        res.status(400).send({Status: false, Message: "Modified User Details can not be empty" });
     }else{
        AssetModel.SparesSchema.findOne({'_id': ReceivedData.Spare_Name_Id},{},{}, (err, result)=> {
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Spare_Name Find Query Error', 'AssetSettingsEdit.controller.js', err);
                  res.status(417).send({status: false, Error:err, Message: "Some error occurred while Find Spare_Name!."});
            }else {
                if(result !== null){
                    result.Spare_Name = ReceivedData.Spare_Name;
                    result.Last_Modified_By = mongoose.Types.ObjectId(ReceivedData.Last_Modified_By);
                    result.save ((err1,result1) => {
                        if(err1) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Spare_Name Update Query Error', 'AssetSettingsEdit.controller.js');
                            res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Spare_Name!."});
                         }else {
                            AssetModel.SparesSchema
                            .findOne({'_id': result1._id})
                            .populate({ path: 'Created_By', select: ['Name'] })
                            .populate({ path: 'Last_Modified_By', select: ['Name'] })
                            .exec((err2,result2) => {
                                if(err2) {
                                    ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Spare_Name Find Query Error', 'AssetSettingsEdit.controller.js', err2);
                                    res.status(417).send({status: false, Message: "Some error occurred while Find Spare_Name!."});
                                }else {
                                    var Result = (result2);
                                    res.status(200).send({Status: true, Response: Result });
                                }
                            })
                         }
                    });
                }else {
                    res.status(400).send({Status: false, Message: "Spare_Name not valid!" });
                 }
            }
        });
     }
};


//Vendors
exports.Vendors_Edit = (req, res) => {
    const ReceivedData = req.body ;
    if(!ReceivedData.Vendor_Name_Id || ReceivedData.Vendor_Name_Id === '' ) {
        res.status(400).send({Status: false, Message: "Vendor_Name Id can not be empty" });
     }else if(!ReceivedData.Vendor_Name || ReceivedData.Vendor_Name === '' ) {
        res.status(400).send({Status: false, Message: "Vendor_Name Name can not be empty" });
     } else if (!ReceivedData.Last_Modified_By || ReceivedData.Last_Modified_By === ''  ) {
        res.status(400).send({Status: false, Message: "Modified User Details can not be empty" });
     }else{
        AssetModel.VendorsSchema.findOne({'_id': ReceivedData.Vendor_Name_Id},{},{}, (err, result)=> {
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Vendor_Name Find Query Error', 'AssetSettingsEdit.controller.js', err);
                  res.status(417).send({status: false, Error:err, Message: "Some error occurred while Find Vendor_Name!."});
            }else {
                if(result !== null){
                    result.Vendor_Name = ReceivedData.Vendor_Name;
                    result.Last_Modified_By = mongoose.Types.ObjectId(ReceivedData.Last_Modified_By);
                    result.save ((err1,result1) => {
                        if(err1) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Vendor_NameUpdate Query Error', 'AssetSettingsEdit.controller.js');
                            res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Vendor_Name!."});
                         }else {
                            AssetModel.VendorsSchema
                            .findOne({'_id': result1._id})
                            .populate({ path: 'Created_By', select: ['Name'] })
                            .populate({ path: 'Last_Modified_By', select: ['Name'] })
                            .exec((err2,result2) => {
                                if(err2) {
                                    ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Vendor_Name Find Query Error', 'AssetSettingsEdit.controller.js', err2);
                                    res.status(417).send({status: false, Message: "Some error occurred while Find Vendor_Name!."});
                                }else {
                                    var Result = (result2);
                                    res.status(200).send({Status: true, Response: Result });
                                }
                            })
                         }
                    });
                }else {
                    res.status(400).send({Status: false, Message: "Vendor_Name not valid!" });
                 }
            }
        });
     }
};

//Asset Type
exports.Asset_Type_Edit = (req, res) => {
    const ReceivedData = req.body ;
    if(!ReceivedData.Asset_Type_Id || ReceivedData.Asset_Type_Id === '' ) {
        res.status(400).send({Status: false, Message: "Asset_Type Id can not be empty" });
     }else if(!ReceivedData.Asset_Type || ReceivedData.Asset_Type === '' ) {
        res.status(400).send({Status: false, Message: "Asset_Type Name can not be empty" });
     } else if (!ReceivedData.Last_Modified_By || ReceivedData.Last_Modified_By === ''  ) {
        res.status(400).send({Status: false, Message: "Modified User Details can not be empty" });
     }else{
        AssetModel.AssetTypeSchema.findOne({'_id': ReceivedData.Asset_Type_Id},{},{}, (err, result)=> {
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset_Type Find Query Error', 'AssetSettingsEdit.controller.js', err);
                  res.status(417).send({status: false, Error:err, Message: "Some error occurred while Find Asset_Type!."});
            }else {
                if(result !== null){
                    result.Asset_Type = ReceivedData.Asset_Type;
                    result.Last_Modified_By = mongoose.Types.ObjectId(ReceivedData.Last_Modified_By);
                    result.save ((err1,result1) => {
                        if(err1) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset_Type Update Query Error', 'AssetSettingsEdit.controller.js');
                            res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Asset_Type!."});
                         }else {
                            AssetModel.AssetTypeSchema
                            .findOne({'_id': result1._id})
                            .populate({ path: 'Created_By', select: ['Name'] })
                            .populate({ path: 'Last_Modified_By', select: ['Name'] })
                            .exec((err2,result2) => {
                                if(err2) {
                                    ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset_Type Find Query Error', 'AssetSettingsEdit.controller.js', err2);
                                    res.status(417).send({status: false, Message: "Some error occurred while Find Asset_Type."});
                                }else {
                                    var Result = (result2);
                                    res.status(200).send({Status: true, Response: Result });
                                }
                            })
                         }
                    });
                }else {
                    res.status(400).send({Status: false, Message: "Asset_Type not valid!" });
                 }
            }
        });
     }
};


//Ownership Type
exports.Ownership_Type_Edit = (req, res) => {
    const ReceivedData = req.body ;
    if(!ReceivedData.Ownership_Type_Id || ReceivedData.Ownership_Type_Id === '' ) {
        res.status(400).send({Status: false, Message: "Ownership Type Id can not be empty" });
     }else if(!ReceivedData.Ownership_Type_Name  || ReceivedData.Ownership_Type_Name  === '' ) {
        res.status(400).send({Status: false, Message: "Ownership Type Name can not be empty" });
     } else if (!ReceivedData.Last_Modified_By || ReceivedData.Last_Modified_By === ''  ) {
        res.status(400).send({Status: false, Message: "Modified User Details can not be empty" });
     }else{
        AssetModel.OwnershipTypeSchema.findOne({'_id': ReceivedData.Ownership_Type_Id},{},{}, (err, result)=> {
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'OwnershipType Find Query Error', 'AssetSettingsEdit.controller.js', err);
                  res.status(417).send({status: false, Error:err, Message: "Some error occurred while Find OwnershipType!."});
            }else {
                if(result !== null){
                    result.Ownership_Type_Name  = ReceivedData.Ownership_Type_Name ;
                    result.Last_Modified_By = mongoose.Types.ObjectId(ReceivedData.Last_Modified_By);
                    result.save ((err1,result1) => {
                        if(err1) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'OwnershipType Update Query Error', 'AssetSettingsEdit.controller.js');
                            res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update OwnershipType!."});
                         }else {
                            AssetModel.OwnershipTypeSchema
                            .findOne({'_id': result1._id})
                            .populate({ path: 'Created_By', select: ['Name'] })
                            .populate({ path: 'Last_Modified_By', select: ['Name'] })
                            .exec((err2,result2) => {
                                if(err2) {
                                    ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'OwnershipType Find Query Error', 'AssetSettingsEdit.controller.js', err2);
                                    res.status(417).send({status: false, Message: "Some error occurred while Find OwnershipType!."});
                                }else {
                                    var Result = (result2);
                                    res.status(200).send({Status: true, Response: Result });
                                }
                            })
                         }
                    });
                }else {
                    res.status(400).send({Status: false, Message: "OwnershipType not valid!" });
                 }
            }
        });
     }
};


//Maintain Stratagy Type
exports.Maintain_Stratagy_Edit = (req, res) => {
    const ReceivedData = req.body ;
    if(!ReceivedData.Mainatanance_Stratagy_Id || ReceivedData.Mainatanance_Stratagy_Id === '' ) {
        res.status(400).send({Status: false, Message: "Mainatanance_Stratagy Id can not be empty" });
     }else if(!ReceivedData.Mainatanance_Stratagy || ReceivedData.Mainatanance_Stratagy === '' ) {
        res.status(400).send({Status: false, Message: "Mainatanance_Stratagy Name can not be empty" });
     } else if (!ReceivedData.Last_Modified_By || ReceivedData.Last_Modified_By === ''  ) {
        res.status(400).send({Status: false, Message: "Modified User Details can not be empty" });
     }else{
        AssetModel.MaintainStratagySchema.findOne({'_id': ReceivedData.Mainatanance_Stratagy_Id},{},{}, (err, result)=> {
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Mainatanance_Stratagy Find Query Error', 'AssetSettingsEdit.controller.js', err);
                  res.status(417).send({status: false, Error:err, Message: "Some error occurred while Find Mainatanance_Stratagy!."});
            }else {
                if(result !== null){
                    result.Mainatanance_Stratagy = ReceivedData.Mainatanance_Stratagy;
                    result.Last_Modified_By = mongoose.Types.ObjectId(ReceivedData.Last_Modified_By);
                    result.save ((err1,result1) => {
                        if(err1) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Mainatanance_Stratagy Update Query Error', 'AssetSettingsEdit.controller.js');
                            res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Mainatanance_Stratagy!."});
                         }else {
                            AssetModel.MaintainStratagySchema
                            .findOne({'_id': result1._id})
                            .populate({ path: 'Created_By', select: ['Name'] })
                            .populate({ path: 'Last_Modified_By', select: ['Name'] })
                            .exec((err2,result2) => {
                                if(err2) {
                                    ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Mainatanance_Stratagy Find Query Error', 'AssetSettingsEdit.controller.js', err2);
                                    res.status(417).send({status: false, Message: "Some error occurred while Find Mainatanance_Stratagy!."});
                                }else {
                                    var Result = (result2);
                                    res.status(200).send({Status: true, Response: Result });
                                }
                            })
                         }
                    });
                }else {
                    res.status(400).send({Status: false, Message: "Mainatanance_Stratagy not valid!" });
                 }
            }
        });
     }
};