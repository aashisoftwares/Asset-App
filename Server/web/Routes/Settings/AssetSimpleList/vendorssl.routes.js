const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsSimpleList.controller');

router.post ('/Vendors_SList' , Controller.Vendors_SList);


module.exports = router ;