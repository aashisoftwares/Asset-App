const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsSimpleList.controller');

router.post ('/Maintain_Stratagy_SList' , Controller.Maintain_Stratagy_SList);


module.exports = router ;