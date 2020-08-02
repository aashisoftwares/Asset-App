const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsEdit.controller');

router.post ('/Spare_Type_Edit' , Controller.Spare_Type_Edit);


module.exports = router ;