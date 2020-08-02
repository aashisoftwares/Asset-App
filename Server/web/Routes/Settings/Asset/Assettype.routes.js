const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsEdit.controller');

router.post ('/Asset_Type_Edit' , Controller.Asset_Type_Edit);


module.exports = router ;