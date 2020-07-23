const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/GeneralSettings.controller');

router.post ('/Employee_SList' , Controller.Employee_SList);


module.exports = router ;