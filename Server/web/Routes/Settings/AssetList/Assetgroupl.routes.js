const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsList.controller');

router.get ('/Asset_Group_List' , Controller.Asset_Group_List);


module.exports = router ;