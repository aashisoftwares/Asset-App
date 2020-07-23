const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsSimpleList.controller');

router.post ('/Ownership_Type_SList' , Controller.Ownership_Type_SList);


module.exports = router ;