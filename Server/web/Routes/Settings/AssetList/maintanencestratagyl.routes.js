const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsList.controller');

router.get ('/Maintain_Stratagy_List' , Controller.Maintain_Stratagy_List);


module.exports = router ;