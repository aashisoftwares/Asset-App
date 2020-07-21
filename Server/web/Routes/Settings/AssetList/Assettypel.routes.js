const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsList.controller');

router.get ('/Asset_Type_List' , Controller.Asset_Type_List);


module.exports = router ;