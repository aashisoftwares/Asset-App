const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsList.controller');

router.get ('/Manufacturer_List' , Controller.Manufac_List);


module.exports = router ;