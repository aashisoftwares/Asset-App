const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsRemove.controller');

router.post ('/Asset_Type_Remove' , Controller.Asset_Type_Remove);


module.exports = router ;