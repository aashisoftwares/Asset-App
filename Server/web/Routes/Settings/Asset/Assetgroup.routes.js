const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettings.controller');

router.post ('/Asset_Group_Create' , Controller.Asset_Group_Create);


module.exports = router ;