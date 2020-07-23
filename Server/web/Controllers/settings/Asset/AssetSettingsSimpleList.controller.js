const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const AssetModel = require('../../../Models/settings/Asset/AssetSettings.model');
const ErrorManagement = require('../../../../handling/ErrorHandling');
const CryptoJS = require("crypto-js");

//Asset Group
exports.Asset_Group_SList = (req, res) => {
    const ReceivedData = req.body ;
    if (!ReceivedData.Company_Id || ReceivedData.Company_Id === ' ') {
        res.status(400).send({status: false, Message: "Company Name Can not be Empty"});
    } else {
        Promise.all([
            AssetModel.AssetGroupSchema
            .find({Company_Id: mongoose.Types.ObjectId(ReceivedData.Company_Id),If_Deleted: false}, { Asset_Group : 1, Spares: 1 },{sort: { updatedAt: -1 }})
            .populate({ path: 'Created_By', select: ['Name']})
            .exec(),
        ]).then (result => {
            const Result = (result[0]);
            res.status(200).send({Status: true, Response: Result});
        }).catch(err => {
            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Group Find Query Error', 'Activities.controller.js');
            res.status(417).send({Status: false, Message: "Some error occurred while creating the Asset Group!."});
         });
    }
};

//Asset Sub GRoup
exports.Asset_Sub_Group_SList = (req, res) => {
    const ReceivedData = req.body ;
    if (!ReceivedData.Company_Id || ReceivedData.Company_Id === ' ') {
        res.status(400).send({status: false, Message: "Company Name Can not be Empty"});
    } else {
        Promise.all([
            AssetModel.AssetSubGroupSchema
            .find({Company_Id: mongoose.Types.ObjectId(ReceivedData.Company_Id),If_Deleted: false}, { Asset_Sub_Group : 1},{sort: { updatedAt: -1 }})
            .populate({ path: 'Asset_Group_Id', select: ['Asset_Group']})
            .populate({ path: 'Created_By', select: ['Name']})
            .exec(),
        ]).then (result => {
            const Result = (result[0]);
            res.status(200).send({Status: true, Response: Result});
        }).catch(err => {
            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Group Find Query Error', 'Activities.controller.js');
            res.status(417).send({Status: false, Message: "Some error occurred while creating the Asset Group!."});
         });
    }   
};


//Manufacturer
exports.Manufac_SList = (req, res) => {
    const ReceivedData = req.body ;
    if (!ReceivedData.Company_Id || ReceivedData.Company_Id === ' ') {
        res.status(400).send({status: false, Message: "Company Name Can not be Empty"});
    } else {
        Promise.all([
            AssetModel.ManufacturerSchema
            .find({Company_Id: mongoose.Types.ObjectId(ReceivedData.Company_Id),If_Deleted: false}, { Manufacturer : 1},{sort: { updatedAt: -1 }})
            .populate({ path: 'Asset_Group_Id', select: ['Asset_Group']})
            .populate({ path: 'Created_By', select: ['Name']})
            .exec(),
        ]).then (result => {
            const Result = (result[0]);
            res.status(200).send({Status: true, Response: Result});
        }).catch(err => {
            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Group Find Query Error', 'Activities.controller.js');
            res.status(417).send({Status: false, Message: "Some error occurred while creating the Asset Group!."});
         });
    }      
};


//Spare Types
exports.Spare_Type_SList = (req, res) => {
    const ReceivedData = req.body ;
    if (!ReceivedData.Company_Id || ReceivedData.Company_Id === ' ') {
        res.status(400).send({status: false, Message: "Company Name Can not be Empty"});
    } else {
        Promise.all([
            AssetModel.SpareTypeSchema
            .find({Company_Id: mongoose.Types.ObjectId(ReceivedData.Company_Id),If_Deleted: false}, { Spare_Type : 1},{sort: { updatedAt: -1 }})
            .populate({ path: 'Created_By', select: ['Name']})
            .exec(),
        ]).then (result => {
            const Result = (result[0]);
            res.status(200).send({Status: true, Response: Result});
        }).catch(err => {
            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Group Find Query Error', 'Activities.controller.js');
            res.status(417).send({Status: false, Message: "Some error occurred while creating the Asset Group!."});
         });
    }
};

//Model Create
exports.Model_SList = (req, res) => {
    const ReceivedData = req.body ;
    if (!ReceivedData.Company_Id || ReceivedData.Company_Id === ' ') {
        res.status(400).send({status: false, Message: "Company Name Can not be Empty"});
    } else {
        Promise.all([
            AssetModel.ModelSchema
            .find({Company_Id: mongoose.Types.ObjectId(ReceivedData.Company_Id),If_Deleted: false}, { Model_Name : 1},{sort: { updatedAt: -1 }})
            .populate({ path: 'Manufacturer_Id', select: ['Manufacturer']})
            .populate({ path: 'Asset_Group_Id', select: ['Asset_Group']})
            .populate({ path: 'Asset_Sub_Group_Id', select: ['Asset_Sub_Group']})
            .populate({ path: 'Created_By', select: ['Name']})
            .exec(),
        ]).then (result => {
            const Result = (result[0]);
            res.status(200).send({Status: true, Response: Result});
        }).catch(err => {
            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Group Find Query Error', 'Activities.controller.js');
            res.status(417).send({Status: false, Message: "Some error occurred while creating the Asset Group!."});
         });
    }   
};

//Spares Create
exports.Spares_SList = (req, res) => {
    const ReceivedData = req.body ;
    if (!ReceivedData.Company_Id || ReceivedData.Company_Id === ' ') {
        res.status(400).send({status: false, Message: "Company Name Can not be Empty"});
    } else {
        Promise.all([
            AssetModel.SparesSchema
            .find({Company_Id: mongoose.Types.ObjectId(ReceivedData.Company_Id),If_Deleted: false}, { Spare_Name : 1, Stocable : 1, Purchaseable : 1, Description : 1 },{sort: { updatedAt: -1 }})
            .populate({ path: 'Spare_Type_Id', select: ['Spare_Type']})
            .populate({ path: 'Created_By', select: ['Name']})
            .exec(),
        ]).then (result => {
            const Result = (result[0]);
            res.status(200).send({Status: true, Response: Result});
        }).catch(err => {
            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Group Find Query Error', 'Activities.controller.js');
            res.status(417).send({Status: false, Message: "Some error occurred while creating the Asset Group!."});
         });
    }
};


//Vendors
exports.Vendors_SList = (req, res) => {
    const ReceivedData = req.body ;
    if (!ReceivedData.Company_Id || ReceivedData.Company_Id === ' ') {
        res.status(400).send({status: false, Message: "Company Name Can not be Empty"});
    } else {
        Promise.all([
            AssetModel.VendorsSchema
            .find({Company_Id: mongoose.Types.ObjectId(ReceivedData.Company_Id),If_Deleted: false}, { Vendor_Name : 1, Address : 1, Phone_Number : 1, Vendor_Email : 1, Vendor_Website : 1, GSTN : 1, Notes : 1 },{sort: { updatedAt: -1 }})
            .populate({ path: 'Created_By', select: ['Name']})
            .exec(),
        ]).then (result => {
            const Result = (result[0]);
            res.status(200).send({Status: true, Response: Result});
        }).catch(err => {
            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Group Find Query Error', 'Activities.controller.js');
            res.status(417).send({Status: false, Message: "Some error occurred while creating the Asset Group!."});
         });
    }
};

//Asset Type
exports.Asset_Type_SList = (req, res) => {
    const ReceivedData = req.body ;
    if (!ReceivedData.Company_Id || ReceivedData.Company_Id === ' ') {
        res.status(400).send({status: false, Message: "Company Name Can not be Empty"});
    } else {
        Promise.all([
            AssetModel.AssetTypeSchema
            .find({Company_Id: mongoose.Types.ObjectId(ReceivedData.Company_Id),If_Deleted: false}, { Asset_Type : 1},{sort: { updatedAt: -1 }})
            .populate({ path: 'Created_By', select: ['Name']})
            .exec(),
        ]).then (result => {
            const Result = (result[0]);
            res.status(200).send({Status: true, Response: Result});
        }).catch(err => {
            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Group Find Query Error', 'Activities.controller.js');
            res.status(417).send({Status: false, Message: "Some error occurred while creating the Asset Group!."});
         });
    }
};



//Ownership Type
exports.Ownership_Type_SList = (req, res) => {
    const ReceivedData = req.body ;
    if (!ReceivedData.Company_Id || ReceivedData.Company_Id === ' ') {
        res.status(400).send({status: false, Message: "Company Name Can not be Empty"});
    } else {
        Promise.all([
            AssetModel.OwnershipTypeSchema
            .find({Company_Id: mongoose.Types.ObjectId(ReceivedData.Company_Id),If_Deleted: false}, { Ownership_Type_Name : 1},{sort: { updatedAt: -1 }})
            .populate({ path: 'Created_By', select: ['Name']})
            .exec(),
        ]).then (result => {
            const Result = (result[0]);
            res.status(200).send({Status: true, Response: Result});
        }).catch(err => {
            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Group Find Query Error', 'Activities.controller.js');
            res.status(417).send({Status: false, Message: "Some error occurred while creating the Asset Group!."});
         });
    }   
};


//Maintain Stratagy Type
exports.Maintain_Stratagy_SList = (req, res) => {
    const ReceivedData = req.body ;
    if (!ReceivedData.Company_Id || ReceivedData.Company_Id === ' ') {
        res.status(400).send({status: false, Message: "Company Name Can not be Empty"});
    } else {
        Promise.all([
            AssetModel.MaintainStratagySchema
            .find({Company_Id: mongoose.Types.ObjectId(ReceivedData.Company_Id),If_Deleted: false}, { Mainatanance_Stratagy : 1},{sort: { updatedAt: -1 }})
            .populate({ path: 'Created_By', select: ['Name']})
            .exec(),
        ]).then (result => {
            const Result = (result[0]);
            res.status(200).send({Status: true, Response: Result});
        }).catch(err => {
            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Group Find Query Error', 'Activities.controller.js');
            res.status(417).send({Status: false, Message: "Some error occurred while creating the Asset Group!."});
         });
    }
};