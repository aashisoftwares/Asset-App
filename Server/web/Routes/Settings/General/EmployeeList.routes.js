const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/GeneralSettings.controller');

router.get ('/Employee_List' , Controller.Employee_List);


module.exports = router ;