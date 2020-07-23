const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsSimpleList.controller');

router.post ('/Manufacturer_SList' , Controller.Manufac_SList);


module.exports = router ;