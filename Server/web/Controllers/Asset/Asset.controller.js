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
    } else if (!ReceivingData.AssManufacturer_Id || ReceivingData.AssManufacturer_Id === ' ') {
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
            Ass_RFID : ReceivingData.Ass_RFID,
            Model_Id : mongoose.Types.ObjectId(ReceivingData.Model_Id),
            Asset_Group_Id: mongoose.Types.ObjectId(ReceivingData.Asset_Group_Id),
            Asset_Sub_Group_Id: mongoose.Types.ObjectId(ReceivingData.Asset_Sub_Group_Id),
            AssManufacturer_Id : mongoose.Types.ObjectId(ReceivingData.AssManufacturer_Id),
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
            Last_Modified_By: mongoose.Types.ObjectId(ReceivingData.Last_Modified_By),
            Active_Status: true,
            Rfid_Status: false,
            If_Deleted: false
        });
        Create_AssetAdd.save ((err , result) => {
            if (err) {
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Type Creation Query Error', 'AssetSettings.controller.js');
                  res.status(417).send({Status: false, Message: "Some error occurred while creating Asset Type!."});
            } else {
                res.status(200).send({Status: true, Response: result});
            }

        });
    }
};

//Asset Edit
exports.Asset_Edit = (req, res) => {
    const ReceivedData = req.body ;
    if(!ReceivedData.Asset_Id || ReceivedData.Asset_Id === '' ) {
        res.status(400).send({Status: false, Message: "Asset Id can not be empty" });
    }else if (!ReceivingData.Serial_Number || ReceivingData.Serial_Number === ' ') {
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
    } else{
     AssetCreateModel.AssetSchema.findOne({'_id': ReceivedData.Asset_Id},{},{}, (err, result)=> { 
         if(err){
             ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Find Query Error', 'Common_Ref_List.controller.js', err);
               res.status(417).send({status: false, Error:err, Message: "Some error occurred while Find Cusine!."});
         }else {
             if (result !== null){
                result.Asset_Nick_Name= ReceivingData.Asset_Nick_Name,
                result.Asset_Code= ReceivingData.Asset_Code,
                result.Model_Id = mongoose.Types.ObjectId(ReceivingData.Model_Id),
                result.Asset_Group_Id=mongoose.Types.ObjectId(ReceivingData.Asset_Group_Id),
                result.Asset_Sub_Group_Id= mongoose.Types.ObjectId(ReceivingData.Asset_Sub_Group_Id),
                result.AssManufacturer__Id = mongoose.Types.ObjectId(ReceivingData.AssManufacturer__Id),
                result.Location_Id= mongoose.Types.ObjectId(ReceivingData.Location_Id),
                result.Purchase_Date= ReceivingData.Purchase_Date,
                result.Price = ReceivingData.Price,
                result.Invoice_Number= ReceivingData.Invoice_Number,
                result.Vendor_Name_Id= ReceivingData.Vendor_Name_Id,
                result.Warranty_period = ReceivingData.Warranty_period,
                result.Warranty_Start_Date = ReceivingData.Warranty_Start_Date,
                result.Warranty_End_Date = ReceivingData.Warranty_End_Date,
                result.Warranty_Coverage_Type = ReceivingData.Warranty_Coverage_Type,
                result.Ownership_Type_Id = mongoose.Types.ObjectId(ReceivingData.Ownership_Type_Id),
                result.Asset_Type_Id = mongoose.Types.ObjectId(ReceivingData.Asset_Type_Id),
                result.Maintanance_Stratagy_Id= mongoose.Types.ObjectId(ReceivingData.Maintanance_Stratagy_Id),
                result.Asset_Allocated_Id = mongoose.Types.ObjectId(ReceivingData.Asset_Allocated_Id),
                result.Company_Id= mongoose.Types.ObjectId(ReceivingData.Company_Id),
                result.Last_Modified_By= mongoose.Types.ObjectId(ReceivingData.Last_Modified_By),
                result.save ((err1,result1) => {
                     if(err1) {
                         ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Edit Query Error', 'Asset.controller.js');
                         res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Cusine!."});
                      }else {
                         res.status(200).send({Status: true, Message: 'Successfully updated' });
                      }
                 })
             }else {
                 res.status(400).send({Status: false, Message: "Asset ID not be valid!" });
             }
         }
    });
    }
 

};

//Asset Remove
exports.Asset_Remove = (req, res) => {
    const ReceivedData = req.body ;
   if(!ReceivedData.Asset_Id || ReceivedData.Asset_Id === '' ) {
       res.status(400).send({Status: false, Message: "Asset Id can not be empty" });
   }else{
    AssetCreateModel.AssetSchema.findOne({'_id': ReceivedData.Asset_Id},{},{}, (err, result)=> { 
        if(err){
            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Cusine Find Query Error', 'Common_Ref_List.controller.js', err);
              res.status(417).send({status: false, Error:err, Message: "Some error occurred while Find Cusine!."});
        }else {
            if (result !== null){
                result.If_Deleted = true;
                result.Last_Modified_By = mongoose.Types.ObjectId(ReceivedData.Last_Modified_By);
                result.save ((err1,result1) => {
                    if(err1) {
                        ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Delete Query Error', 'Asset.controller.js');
                        res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Cusine!."});
                     }else {
                        res.status(200).send({Status: true, Message: 'Successfully Deleted' });
                     }
                })
            }else {
                res.status(400).send({Status: false, Message: "Asset ID not be valid!" });
            }
        }
   });
   }
};



//Asset List
exports.Asset_List = (req, res) => {
    const ReceivedData = req.body ;
    if (!ReceivedData.Company_Id || ReceivedData.Company_Id === ' ') {
       res.status(400).send({status: false, Message: "Company Name Can not be Empty"});
    }else{
        Promise.all ([
            AssetCreateModel.AssetSchema
            .find({Company_Id: mongoose.Types.ObjectId(ReceivedData.Company_Id),
                     If_Deleted : false},
                    { Asset_Nick_Name : 1 ,
                      Serial_Number : 1,
                      Asset_Code : 1 ,
                      } ,
                     {sort: { updatedAt: -1 }})
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
};


//Asset View
exports.Asset_View = (req, res) => {
    const ReceivedData = req.body ;
    if (!ReceivedData.Asset_Id || ReceivedData.Asset_Id === ' ') {
       res.status(400).send({status: false, Message: "Asset Name Can not be Empty"});
    }else{
        Promise.all ([
            AssetCreateModel.AssetSchema
            .find({_id: mongoose.Types.ObjectId(ReceivedData.Asset_Id),
                     If_Deleted : false},
                    { Asset_Nick_Name : 1 ,
                      Serial_Number : 1,
                      Asset_Code : 1 ,
                      Ass_RFID:1,
                      Purchase_Date:1,
                      Invoice_Number:1,
                      Price:1,
                      Warranty_period: 1,
                      Warranty_Start_Date : 1,
                      Warranty_End_Date : 1,
                      Warranty_Coverage_Type : 1,
                      Ownership_Type_Id:1,
                      } ,
                     {sort: { updatedAt: -1 }})
                     .populate({ path: 'Model_Id', select: ['Model_Name']})
                     .populate({ path: 'Asset_Group_Id', select: ['Asset_Group']})
                     .populate({ path: 'Asset_Sub_Group_Id', select: ['Asset_Sub_Group']})
                     .populate({ path: 'AssManufacturer_Id', select: ['Manufacturer']})
                     .populate({ path: 'Location_Id', select: ['Location_Name','Branch','Department']})
                     .populate({ path: 'Vendor_Name_Id', select: ['Vendor_Name','Address','Phone_Number','Vendor_Email','Vendor_Website']})
                     .populate({ path: 'Ownership_Type_Id', select: ['Ownership_Type_Name']})
                     .populate({ path: 'Asset_Type_Id', select: ['Asset_Type']})
                     .populate({ path: 'Maintanance_Stratagy_Id', select: ['Mainatanance_Stratagy']})
                     .populate({ path: 'Asset_Allocated_Id', select: ['Employee_Name','Employee_Code','Mobile_Number','Email','Designation','Department','Branch']})
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
};


//Asset Image
exports.Asset_Img = (req, res) => {}


//Asset Map List
exports.Asset_Map_List = (req, res) => {
    const ReceivedData = req.body ;
    if (!ReceivedData.Company_Id || ReceivedData.Company_Id === ' ') {
       res.status(400).send({status: false, Message: "Company Name Can not be Empty"});
    }else{
        Promise.all ([
            AssetCreateModel.AssetSchema
            .find({Company_Id: mongoose.Types.ObjectId(ReceivedData.Company_Id),
                     If_Deleted : false,
                     Rfid_Status : false},
                    { Asset_Nick_Name : 1 ,
                      Serial_Number : 1,
                      Asset_Code : 1 ,
                      } ,
                     {sort: { updatedAt: -1 }})
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
};

//Asset Map
exports.Asset_Map = (req, res) => {
    const ReceivedData = req.body ;
    if (!ReceivedData.Asset_Id || ReceivedData.Asset_Id === ' ') {
       res.status(400).send({status: false, Message: "Asset Name Can not be Empty"});
    }else if (!ReceivedData.Ass_RFID || ReceivedData.Ass_RFID === ' '){
        res.status(400).send({status: false, Message: "RFID Detail Can not be Empty"});
    }else {
        AssetCreateModel.AssetSchema.findOne({'_id': ReceivedData.Asset_Id, Company_Id: mongoose.Types.ObjectId(ReceivedData.Company_Id)},{},{}, (err, result)=> { 
            if(err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Find Query Error', 'Common_Ref_List.controller.js', err);
                  res.status(417).send({status: false, Error:err, Message: "Some error occurred while Find Cusine!."});
            }else {
                if (result !== null){
                   result.Ass_RFID = ReceivedData.Ass_RFID,
                   result.Rfid_Status= true,
                   result.Last_Modified_By= mongoose.Types.ObjectId(ReceivedData.Last_Modified_By),
                   result.save ((err1,result1) => {
                        if(err1) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Asset Edit Query Error', 'Asset.controller.js');
                            res.status(417).send({Status: false, Error: err1, Message: "Some error occurred while Update Cusine!."});
                         }else {
                            res.status(200).send({Status: true, Message: 'Successfully RFID Updated'});
                         }
                    })
                }else {
                    res.status(400).send({Status: false, Message: "Asset ID not be valid!" });
                }
            }
       });
    }
}