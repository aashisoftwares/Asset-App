const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsRemove.controller');

router.post ('/Vendors_Remove' , Controller.Vendors_Remove);


module.exports = router ;