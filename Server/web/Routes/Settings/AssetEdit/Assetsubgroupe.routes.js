const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsEdit.controller');

router.post ('/Asset_Sub_Group_Edit' , Controller.Asset_Sub_Group_Edit);


module.exports = router ;