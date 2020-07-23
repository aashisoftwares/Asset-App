const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/GeneralSettings.controller');

router.post ('/Location_SList' , Controller.Location_SList);


module.exports = router ;