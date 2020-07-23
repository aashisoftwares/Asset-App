const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsSimpleList.controller');

router.post ('/Spares_SList' , Controller.Spares_SList);


module.exports = router ;