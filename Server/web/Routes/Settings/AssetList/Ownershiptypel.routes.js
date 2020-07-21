const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsList.controller');

router.get ('/Ownership_Type_List' , Controller.Ownership_Type_List);


module.exports = router ;