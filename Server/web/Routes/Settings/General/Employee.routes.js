const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/GeneralSettings.controller');

router.post ('/Employee_Add' , Controller.Employee_Add);


module.exports = router ;