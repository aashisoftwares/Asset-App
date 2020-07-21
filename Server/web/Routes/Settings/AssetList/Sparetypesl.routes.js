const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsList.controller');

router.get ('/Spare_Type_List' , Controller.Spare_Type_List);


module.exports = router ;