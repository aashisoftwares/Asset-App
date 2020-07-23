const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const RegisterModel = require('../../Models/register.model');
const ErrorManagement = require('../../../handling/ErrorHandling');
const CryptoJS = require("crypto-js");

// company_register
exports.company_register = (req, res) => {
    const CompanyRegister = req.body;
        if(!CompanyRegister.Company_Name || CompanyRegister.Company_Name === '' ){
            res.status(400).send({Status: false, Message: "Name can not be empty" });
        }else if(!CompanyRegister.Company_Email || CompanyRegister.Company_Email === '' ) {
            res.status(400).send({Status: false, Message: "Email can not be empty" });
        }else {
        const CreateCompany_Management = new RegisterModel.Company_Management({
            Company_Name: CompanyRegister.Company_Name,
            D_No: CompanyRegister.D_No || '-',
            Street : CompanyRegister.Street || '-',
            Area : CompanyRegister.Area || '-',
            City: CompanyRegister.City || '-',
            State: CompanyRegister.State || '-',
            Country: CompanyRegister.Country || '-',
            zip: CompanyRegister.zip || '-',
            Company_Email: CompanyRegister.Company_Email || '-',
            Company_Phone: CompanyRegister.Company_Phone || '-',
            Company_Website: CompanyRegister.Company_Website || '',
            Company_Type: CompanyRegister.Company_Type || '',
            Company_Registry: CompanyRegister.Company_Registry || '',
            Company_TypeOfBusiness: CompanyRegister.Company_TypeOfBusiness || '',
        });
        CreateCompany_Management.save ( function (err , result) {
        if (err){
            console.log (err);
            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Company Creation Query Error', 'AdminManagement.controller.js', err);
            res.status(400).send({Status: false, Message: "Some error occurred while creating the Company!."});
        }else {
            console.log (result)
            res.status(200).send({Status: true, Response: result , Message : "Company Registered Successfully"});
        }
    });
 }
};


//User Create
exports.User_Create = (req, res) => {
    const UserCreate = req.body;
    if(!UserCreate.Company_Id || UserCreate.Company_Id === ''){
        res.status(400).send({Status: false, Message: "Company Details can not be empty" });
    }else if(!UserCreate.Name || UserCreate.Name === '' ){
        res.status(400).send({Status: false, Message: "Name can not be empty" });
    }else if(!UserCreate.User_Name || UserCreate.User_Name === '' ){
        res.status(400).send({Status: false, Message: "User Name can not be empty" });
    }else if(!UserCreate.User_Password || UserCreate.User_Password === '' ){
        res.status(400).send({Status: false, Message: "User Password can not be empty" });
    }else {
        const CreateUser_Management = new RegisterModel.User_Management({
         User_Name : UserCreate.User_Name,
         User_Password : UserCreate.User_Password,
         Name : UserCreate.Name,
         Phone : UserCreate.Phone,
         Email : UserCreate.Email,
         If_Admin: UserCreate.If_Admin,
         Company_Id : UserCreate.Company_Id,
         Active_Status: true
        });
        CreateUser_Management.save( (err, result) => {
            if (err){
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'User Creation Query Error', 'register.controller.js', err);
                res.status(400).send({Status: false, Message: "Some error occurred while creating the User!."});
                console.log (err);
            }
            else {
                console.log (result);
                res.status(200).send({Status: true, Response: result , Message : "User Registered Successfully"});
            }
        });
    }
}


//User Login
exports.User_Login = (req, res) => {
    const ReceivedData = req.body;
    if(!ReceivedData.User_Name || ReceivedData.User_Name === '' ) {
        res.status(400).send({Status: false, Message: "User_Name can not be empty" });
     } else if (!ReceivedData.User_Password || ReceivedData.User_Password === ''  ) {
        res.status(400).send({Status: false, Message: "User Password can not be empty" });
     }else {
        RegisterModel.User_Management.findOne({'User_Name': ReceivedData.User_Name.toLowerCase(),'User_Password': ReceivedData.User_Password, 'Active_Status': 'true'}, { Password: 0 }, {}, (err, result) => {
            if(err) {
                ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'User Validate Query Error', 'SignIn_SignUp.controller.js - 134', err);
                res.status(500).send({Status:"False", Error:err, Message: "Some error occurred while User Validate"});           
            }else {
                if (result === null){
                    RegisterModel.User_Management.findOne({'User_Name': ReceivedData.User_Name.toLowerCase()},{ User_Password: 0 },  {}, (err_check, result_check) => {
                        if(err_check) {
                            ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'User Email Validate Query Error', 'SignIn_SignUp.controller.js - 140', err_check);
                            res.status(500).send({Status:"False", Error:err_check, Message: "Some error occurred while User Email Validate"});           
                        }else {
                            if (result_check === null) {
                                res.status(200).send({ Status:"True", Output:"False", Message: "Invalid account details!" });
                            }else{
                                res.status(200).send({ Status:"True", Output:"False",  Message: "Email and password do not match!" });
                            }
                        }
                    });
                }else {
                    let payload = { subject : result._id }
                    let token = jwt.sign(payload, 'MealAllyKey')
                    res.status(200).send({ Status:"True", Output:'True', Response: result, Message: 'Sign In Success' , token });
                }
            }
        });
     }
};