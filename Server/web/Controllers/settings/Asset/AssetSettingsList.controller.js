const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const AssetModel = require('../../../Models/settings/Asset/AssetSettings.model');
const ErrorManagement = require('../../../../handling/ErrorHandling');
const CryptoJS = require("crypto-js");

//Asset Group
exports.Asset_Group_List = (req, res) => {
    AssetModel.AssetGroupSchema.find({})
    .exec ((err, result) => {
        if (err){
            console.log ("Unable to Fetch Data");
        }else {
            res.json(result);
        }
    });
};

//Asset Sub GRoup
exports.Asset_Sub_Group_List = (req, res) => {
    AssetModel.AssetSubGroupSchema.find({})
    .exec ((err, result) => {
        if (err){
            console.log ("Unable to Fetch Data");
        }else {
            res.json(result);
        }
    });    
};


//Manufacturer
exports.Manufac_List = (req, res) => {
    AssetModel.ManufacturerSchema.find({})
    .exec ((err, result) => {
        if (err){
            console.log ("Unable to Fetch Data");
        }else {
            res.json(result);
        }
    });    
};


//Spare Types
exports.Spare_Type_List = (req, res) => {
    AssetModel.SpareTypeSchema.find({})
    .exec ((err, result) => {
        if (err){
            console.log ("Unable to Fetch Data");
        }else {
            res.json(result);
        }
    });
};

//Model Create
exports.Model_List = (req, res) => {
    AssetModel.ModelSchema.find({})
    .exec ((err, result) => {
        if (err){
            console.log ("Unable to Fetch Data");
        }else {
            res.json(result);
        }
    });
};

//Spares Create
exports.Spares_List = (req, res) => {
    AssetModel.SparesSchema.find({})
    .exec ((err, result) => {
        if (err){
            console.log ("Unable to Fetch Data");
        }else {
            res.json(result);
        }
    });
};


//Vendors
exports.Vendors_List = (req, res) => {
    AssetModel.VendorsSchema.find({})
    .exec ((err, result) => {
        if (err){
            console.log ("Unable to Fetch Data");
        }else {
            res.json(result);
        }
    });
};

//Asset Type
exports.Asset_Type_List = (req, res) => {
    AssetModel.AssetTypeSchema.find({})
    .exec ((err, result) => {
        if (err){
            console.log ("Unable to Fetch Data");
        }else {
            res.json(result);
        }
    });
};



//Ownership Type
exports.Ownership_Type_List = (req, res) => {
    AssetModel.OwnershipTypeSchema.find({})
    .exec ((err, result) => {
        if (err){
            console.log ("Unable to Fetch Data");
        }else {
            res.json(result);
        }
    });    
};


//Maintain Stratagy Type
exports.Maintain_Stratagy_List = (req, res) => {
    AssetModel.MaintainStratagySchema.find({})
    .exec ((err, result) => {
        if (err){
            console.log ("Unable to Fetch Data");
        }else {
            res.json(result);
        }
    });
};