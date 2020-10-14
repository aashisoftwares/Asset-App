const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const ServiceModel = require('../../Models/Service/Service.model');
const ErrorManagement = require('../../../handling/ErrorHandling');
const CryptoJS = require("crypto-js");


//Service Create
exports.Service_Create = (req, res) => {
    const ReceivingData = req.body ;
    if (!ReceivingData.Asset_ID || ReceivingData.Asset_ID === ' ') {        
        res.status(400).send({Status: false, Message: "Asset Name Can not be Empty"});
    } else if (!ReceivingData.Company_Id || ReceivingData.Company_Id === ' ') {
        res.status(400).send({Status: false, Message: "Company Name Can not be Empty"});
    } else {
        const Create_Service = new ServiceModel.ServiceSchema({
            Req_By: ReceivingData.Req_By,
            Req_Num: ReceivingData.Req_Num,
            Problem_Description: ReceivingData.Problem_Description,
            priority : ReceivingData.priority,
            severity : ReceivingData.severity,
            Req_Status : ReceivingData.Req_Status,  
            Asset_ID: mongoose.Types.ObjectId(ReceivingData.Asset_ID),
            Company_Id: mongoose.Types.ObjectId(ReceivingData.Company_Id),
            Created_By : mongoose.Types.ObjectId(ReceivingData.Created_By),
            Last_Modified_By : mongoose.Types.ObjectId(ReceivingData.Last_Modified_By),
            Active_Status: true,
            If_Deleted: false
        });
        Create_Service.save ((err , result) => {
            if (err) {
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Type Creation Query Error', 'AssetSettings.controller.js');
                  res.status(417).send({Status: false, Message: "Some error occurred while creating Asset Type!."});
            } else {
                res.status(200).send({Status: true, Response: result});
            }

        });
    }
};


//Service List
exports.Service_List = (req, res) => {
    const ReceivedData = req.body ;
    if (!ReceivedData.Company_Id || ReceivedData.Company_Id === ' ') {
       res.status(400).send({status: false, Message: "Company Name Can not be Empty"});
    }else{
        Promise.all ([
            ServiceModel.ServiceSchema
            .find({Company_Id: mongoose.Types.ObjectId(ReceivedData.Company_Id),
                     If_Deleted : false, Active_Status: true},
                   {Req_By: 1,
                    Req_Num: 1,
                    Problem_Description: 1,
                    priority : 1,
                    severity : 1,
                    Req_Status : 1,
                    Asset_ID: 1,
                    createdAt : 1                   
                      } ,
                     {sort: { updatedAt: -1 }})
                     .populate({ path: 'Asset_ID', select: ['Asset_Nick_Name','Serial_Number','Asset_Code','Model_Name','Manufacturer','Asset_Group','Asset_Sub_Group']})
                     .populate({ path: 'Created_By', select: ['Name','Phone','Email']})
                     .exec(),
          ]).then (result => {
            const Result = (result[0]);
            res.status(200).send({Status: true, Response: Result});
         }).catch(err => {
            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Menu Find Query Error', 'Menu.controller.js');
            res.status(417).send({Status: false, Message: "Some error occurred while Finding Menu 1!."});
         });
    }
}

//Service View
exports.Service_View = (req, res) => {
    const ReceivedData = req.body ;
    if (!ReceivedData.Req_Id || ReceivedData.Req_Id === ' ') {
       res.status(400).send({status: false, Message: "Service Details Can not be Empty"});
    }else{
        Promise.all ([
        ServiceModel.ServiceSchema
        .find({_id: mongoose.Types.ObjectId(ReceivedData.Req_Id),
                 If_Deleted : false, 
                 Active_Status: true},
               {Req_By: 1,
                Req_Num: 1,
                Problem_Description: 1,
                priority : 1,
                severity : 1,
                Req_Status : 1,
                Asset_ID: 1,
                createdAt : 1 
                  } ,
                 {sort: { updatedAt: -1 }})
                 .populate({ path: 'Asset_ID', select: ['Asset_Nick_Name','Serial_Number','Asset_Code']})
                 .populate({ path: 'Created_By', select: ['Name','Phone','Email']})
                 .exec()
      ]).then (result => {
        const Result = (result[0]);
        res.status(200).send({Status: true, Response: Result});
     }).catch(err => {
        ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Menu Find Query Error', 'Menu.controller.js');
        res.status(417).send({Status: false, Message: "Some error occurred while Finding Menu 1!."});
     });
    }
}

//Service Activity
exports.Service_Activity = (req, res) => {
    const ReceivingData = req.body ;
    if (!ReceivingData.Req_ID || ReceivingData.Req_ID === ' ') {        
        res.status(400).send({Status: false, Message: "Service Number Can not be Empty"});
    } else if (!ReceivingData.Company_Id || ReceivingData.Company_Id === ' ') {
        res.status(400).send({Status: false, Message: "Company Name Can not be Empty"});
    } else {
        const Create_Service_Activity = new ServiceModel.ServiceActivitySchema({
            Req_ID: ReceivingData.Req_ID,
            Worked_By: ReceivingData.Worked_By,
            Start_date: ReceivingData.Start_date,
            Start_Time : ReceivingData.Start_Time,
            End_Date : ReceivingData.End_Date,
            End_Time : ReceivingData.End_Time,
            Functional_Status : ReceivingData.Functional_Status,
            Remarks : ReceivingData.Remarks,  
            Company_Id: mongoose.Types.ObjectId(ReceivingData.Company_Id),
            Created_By : mongoose.Types.ObjectId(ReceivingData.Created_By),
            Active_Status: true,
            If_Deleted: false
        });
        Create_Service_Activity.save ((err , result) => {
            if (err) {
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Type Creation Query Error', 'AssetSettings.controller.js');
                  res.status(417).send({Status: false, Message: "Some error occurred while creating Asset Type!."});
            } else {
                res.status(200).send({Status: true, Response: result});
            }

        });
    }
}


//Activity List
exports.Activity_List = (req, res) => {
    const ReceivedData = req.body ;
    if (!ReceivedData.Req_Id || ReceivedData.Req_Id === ' ') {
       res.status(400).send({status: false, Message: "Service Details Can not be Empty"});
    }else{
        Promise.all ([
            ServiceModel.ServiceActivitySchema
        .find({Req_ID: mongoose.Types.ObjectId(ReceivedData.Req_Id),
                 If_Deleted : false, 
                 Active_Status: true},
               {Worked_By:1,
                Start_date:1,
                Start_Time:1,
                End_Date:1,
                End_Time:1,
                Remarks:1,
                Functional_Status:1,
                createdAt : 1 
                  } ,
                 {sort: { updatedAt: -1 }})
                 .populate({ path: 'Req_ID', select: ['Req_By','Req_Num','Problem_Description','Req_Status','createdAt']})
                 .populate({ path: 'Created_By', select: ['Name','Phone','Email']})
                 .exec()
      ]).then (result => {
        const Result = (result[0]);
        res.status(200).send({Status: true, Response: Result});
     }).catch(err => {
        ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Menu Find Query Error', 'Menu.controller.js');
        res.status(417).send({Status: false, Message: "Some error occurred while Finding Menu 1!."});
     });
    }
}


//Service Update
exports.Service_Update = (req, res) => {
    const ReceivedData = req.body ;
    if (!ReceivedData.Req_Id || ReceivedData.Req_Id === ' ') {
       res.status(400).send({status: false, Message: "Service Details Can not be Empty"});
    }else{
        ServiceModel.ServiceSchema.findOne({'_id': ReceivedData.Req_Id, Company_Id: mongoose.Types.ObjectId(ReceivedData.Company_Id)},{},{}, (err, result)=> { 
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Find Query Error', 'Common_Ref_List.controller.js', err);
                  res.status(417).send({status: false, Error:err, Message: "Some error occurred while Find Cusine!."});
            }else {
                if (result !== null){
                    result.Req_Status = ReceivedData.Req_Status,
                    result.Last_Modified_By= mongoose.Types.ObjectId(ReceivedData.Last_Modified_By),
                    result.save ((err1,result1) => {
                         if(err1) {
                             ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Edit Query Error', 'Asset.controller.js');
                             res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Cusine!."});
                          }else {
                             res.status(200).send({Status: true, Message: 'Status Updated Successfully'});
                          }
                     })
                 }else {
                     res.status(400).send({Status: false, Message: "Asset ID not be valid!" });
                 }
            }
        });
    }
}