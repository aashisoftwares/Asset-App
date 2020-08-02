const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettings.controller');

router.post ('/Manufacturer_Create' , Controller.Manufac_Create);


module.exports = router ;