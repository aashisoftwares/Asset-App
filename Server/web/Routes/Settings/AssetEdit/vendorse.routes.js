const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsEdit.controller');

router.post ('/Vendors_Edit' , Controller.Vendors_Edit);


module.exports = router ;