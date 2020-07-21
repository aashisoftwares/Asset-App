const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsList.controller');

router.get ('/Spares_List' , Controller.Spares_List);


module.exports = router ;