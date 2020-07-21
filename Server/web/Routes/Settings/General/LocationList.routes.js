const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/GeneralSettings.controller');

router.get ('/Location_List' , Controller.Location_List);


module.exports = router ;