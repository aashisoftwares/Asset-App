const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsSimpleList.controller');

router.post ('/Spare_Type_SList' , Controller.Spare_Type_SList);


module.exports = router ;