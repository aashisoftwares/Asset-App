const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsRemove.controller');

router.post ('/Manufacturer_Remove' , Controller.Manufac_Remove);


module.exports = router ;