const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsRemove.controller');

router.post ('/Asset_Group_Remove' , Controller.Asset_Group_Remove);


module.exports = router ;