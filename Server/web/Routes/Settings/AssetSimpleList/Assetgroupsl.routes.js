const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsSimpleList.controller');

router.post ('/Asset_Group_SList' , Controller.Asset_Group_SList);


module.exports = router ;