const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettings.controller');

router.post ('/Spare_Type_Create' , Controller.Spare_Type_Create);


module.exports = router ;