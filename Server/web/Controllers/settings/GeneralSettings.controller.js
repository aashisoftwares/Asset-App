const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const GeneralSettingsModel = require('../../Models/settings/generalsettings.model');
const ErrorManagement = require('../../../handling/ErrorHandling');
const CryptoJS = require("crypto-js");


//Location Group
exports.Location_Create = (req, res) => {
    const ReceivingData = req.body ;

    if (!ReceivingData.Location_Name || ReceivingData.Location_Name === ' ') {        
        res.status(400).send({Status: false, Message: "Location Can not be Empty"});
    } else if (!ReceivingData.Branch || ReceivingData.Branch === ' ') {        
        res.status(400).send({Status: false, Message: "Branch Can not be Empty"});
    } else if (!ReceivingData.Department || ReceivingData.Department === ' ') {        
        res.status(400).send({Status: false, Message: "Department Can not be Empty"});
    } else if (!ReceivingData.Company_Id || ReceivingData.Company_Id === ' ') {
        res.status(400).send({Status: false, Message: "Company ID Can not be Empty"});
    } else if (!ReceivingData.Created_By || ReceivingData.Created_By === ' ') {
        res.status(400).send({Status: false, Message: "User Details Can not be Empty"});
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
            If_Deleted: false
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
                        res.status(417).send({Status: false, Message: "Some error occurred while Find Employee!."});
                    } else {
                        res.status(200).send({Status: true, Response: result1 });
                    }         
                });
            }

        });
    }
};


//Location List
exports.Location_List = (req, res) => {
    GeneralSettingsModel.LocationSchema.find({})
    .exec ((err, result) => {
        if (err){
            console.log ("Unable to Fetch Data");
        }else {
            res.json(result);
        }
    });
};

//Location Simple List
exports.Location_SList = (req, res) => {
    const ReceivedData = req.body ;
    if (!ReceivedData.Company_Id || ReceivedData.Company_Id === ' ') {
        res.status(400).send({Status: false, Message: "Company Name Can not be Empty"});
    } else {
        Promise.all([
            GeneralSettingsModel.LocationSchema
            .find({Company_Id: mongoose.Types.ObjectId(ReceivedData.Company_Id),If_Deleted: false}, { Location_Name : 1, Branch : 1, Department : 1, Description : 1},{sort: { updatedAt: -1 }})
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

//Employee Group
exports.Employee_Add = (req, res) => {
    const ReceivingData = req.body ;

    if (!ReceivingData.Employee_Name || ReceivingData.Employee_Name === ' ') {        
        res.status(400).send({Status: false, Message: "Location Can not be Empty"});
    } else if (!ReceivingData.Branch || ReceivingData.Branch === ' ') {        
        res.status(400).send({Status: false, Message: "Branch Can not be Empty"});
    } else if (!ReceivingData.Department || ReceivingData.Department === ' ') {        
        res.status(400).send({Status: false, Message: "Department Can not be Empty"});
    } else if (!ReceivingData.Company_Id || ReceivingData.Company_Id === ' ') {
        res.status(400).send({Status: false, Message: "Company ID Can not be Empty"});
    } else if (!ReceivingData.Created_By || ReceivingData.Created_By === ' ') {
        res.status(400).send({Status: false, Message: "User Details Can not be Empty"});
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
            If_Deleted : false
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
                        res.status(417).send({Status: false, Message: "Some error occurred while Find Location!."});
                    } else {
                        res.status(200).send({Status: true, Response: result1 });
                    }         
                });
            }

        });
    }
};


//Employee List
exports.Employee_List = (req, res) => {
    GeneralSettingsModel.HrEmployeeSchema.find({})
    .exec ((err, result) => {
        if (err){
            console.log ("Unable to Fetch Data");
        }else {
            res.json(result);
        }
    });
};


//Employee Simple List
exports.Employee_SList = (req, res) => {
    const ReceivedData = req.body ;
    if (!ReceivedData.Company_Id || ReceivedData.Company_Id === ' ') {
        res.status(400).send({Status: false, Message: "Company Name Can not be Empty"});
    } else {
        Promise.all([
            GeneralSettingsModel.HrEmployeeSchema
            .find({Company_Id: mongoose.Types.ObjectId(ReceivedData.Company_Id),If_Deleted: false}, { Employee_Name : 1, Employee_Code : 1, Branch : 1, Department : 1, Designation : 1, Mobile_Number : 1, Email : 1 },{sort: { updatedAt: -1 }})
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