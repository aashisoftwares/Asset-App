const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsSimpleList.controller');

router.post ('/Asset_Type_SList' , Controller.Asset_Type_SList);


module.exports = router ;