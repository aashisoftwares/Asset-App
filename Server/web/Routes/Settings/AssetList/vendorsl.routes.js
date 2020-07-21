const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsList.controller');

router.get ('/Vendors_List' , Controller.Vendors_List);


module.exports = router ;