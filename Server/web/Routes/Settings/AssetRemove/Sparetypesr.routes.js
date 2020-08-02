const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsRemove.controller');

router.post ('/Spare_Type_Remove' , Controller.Spare_Type_Remove);


module.exports = router ;