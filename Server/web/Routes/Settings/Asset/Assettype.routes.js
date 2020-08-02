const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettings.controller');

router.post ('/Asset_Type_Create' , Controller.Asset_Type_Create);


module.exports = router ;