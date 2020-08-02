const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsEdit.controller');

router.post ('/Manufacturer_Edit' , Controller.Manufac_Edit);


module.exports = router ;