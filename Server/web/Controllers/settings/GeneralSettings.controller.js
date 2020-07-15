const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const GeneralSettingsModel = require('../../Models/settings/generalsettings.model');
const ErrorManagement = require('../../../handling/ErrorHandling');
const CryptoJS = require("crypto-js");


//Location Group
exports.Location_Create = (req, res) => {
    const ReceivingData = req.body ;

    if (!ReceivingData.Location_Name || ReceivingData.Location_Name === ' ') {        
        res.status(400).send({status: false, Message: "Location Can not be Empty"});
    } else if (!ReceivingData.Branch || ReceivingData.Branch === ' ') {        
        res.status(400).send({status: false, Message: "Branch Can not be Empty"});
    } else if (!ReceivingData.Department || ReceivingData.Department === ' ') {        
        res.status(400).send({status: false, Message: "Department Can not be Empty"});
    } else if (!ReceivingData.Company_Id || ReceivingData.Company_Id === ' ') {
        res.status(400).send({status: false, Message: "Company ID Can not be Empty"});
    } else if (!ReceivingData.Created_By || ReceivingData.Created_By === ' ') {
        res.status(400).send({status: false, Message: "User Details Can not be Empty"});
    } else {
        const Create_LocationCreate = new GeneralSettingsModel.LocationSchema({
            Location_Name: ReceivingData.Location_Name,
            Branch : ReceivingData.Branch,
            Department: ReceivingData.Department,
            Description : ReceivingData.Description,
            Company_Id: mongoose.Types.ObjectId(ReceivingData.Company_Id),
            Created_By : mongoose.Types.ObjectId(ReceivingData.Created_By),
            Last_Modified_By: mongoose.Types.ObjectId(ReceivingData.Created_By),
            Active_Status: true,
            If_Deleted: true
        });
        Create_LocationCreate.save ((err , result) => {
            if (err) {
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Employee Creation Query Error', 'GeneralSettings.controller.js');
                  res.status(417).send({Status: false, Message: "Some error occurred while creating Employee!."});
            } else {
                GeneralSettingsModel.LocationSchema 
                .findOne ({'_id' : result._id})
                .populate({ path: 'Created_By' , select : ['Name'] })
                .populate ({ path: 'Last_Modified_By' , select : ['Name'] })
                .exec (function (err1, result1) {
                    if (err1) {
                        ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Employee Find Query Error', 'GeneralSettings.controller.js', err1);
                        res.status(417).send({status: false, Message: "Some error occurred while Find Employee!."});
                    } else {
                        res.status(200).send({Status: true, Response: result1 });
                    }         
                });
            }

        });
    }
};


//Employee Group
exports.Employee_Add = (req, res) => {
    const ReceivingData = req.body ;

    if (!ReceivingData.Employee_Name || ReceivingData.Employee_Name === ' ') {        
        res.status(400).send({status: false, Message: "Location Can not be Empty"});
    } else if (!ReceivingData.Branch || ReceivingData.Branch === ' ') {        
        res.status(400).send({status: false, Message: "Branch Can not be Empty"});
    } else if (!ReceivingData.Department || ReceivingData.Department === ' ') {        
        res.status(400).send({status: false, Message: "Department Can not be Empty"});
    } else if (!ReceivingData.Company_Id || ReceivingData.Company_Id === ' ') {
        res.status(400).send({status: false, Message: "Company ID Can not be Empty"});
    } else if (!ReceivingData.Created_By || ReceivingData.Created_By === ' ') {
        res.status(400).send({status: false, Message: "User Details Can not be Empty"});
    } else {
        const Create_EmployeeAdd = new GeneralSettingsModel.HrEmployeeSchema({
            Employee_Name : ReceivingData.Employee_Name,
            Employee_Code : ReceivingData.Employee_Code,
            Branch: ReceivingData.Branch,
            Department : ReceivingData.Department,
            Designation : ReceivingData.Designation,
            Mobile_Number : ReceivingData.Mobile_Number,
            Email : ReceivingData.Email,
            Company_Id : mongoose.Types.ObjectId(ReceivingData.Company_Id),
            Created_By : mongoose.Types.ObjectId(ReceivingData.Created_By),
            Last_Modified_By : mongoose.Types.ObjectId(ReceivingData.Created_By),
            Active_Status : true,
            If_Deleted : true
        });
        Create_EmployeeAdd.save ((err , result) => {
            if (err) {
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Employee Creation Query Error', 'GeneralSettings.controller.js');
                  res.status(417).send({Status: false, Message: "Some error occurred while creating Employee!."});
            } else {
                GeneralSettingsModel.HrEmployeeSchema 
                .findOne ({'_id' : result._id})
                .populate({ path: 'Created_By' , select : ['Name'] })
                .populate ({ path: 'Last_Modified_By' , select : ['Name'] })
                .exec (function (err1, result1) {
                    if (err1) {
                        ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Location Find Query Error', 'GeneralSettings.controller.js', err1);
                        res.status(417).send({status: false, Message: "Some error occurred while Find Location!."});
                    } else {
                        res.status(200).send({Status: true, Response: result1 });
                    }         
                });
            }

        });
    }
};