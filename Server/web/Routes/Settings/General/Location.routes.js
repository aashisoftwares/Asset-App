const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/GeneralSettings.controller');

router.post ('/Location_Create' , Controller.Location_Create);


module.exports = router ;