const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsEdit.controller');

router.post ('/Ownership_Type_Edit' , Controller.Ownership_Type_Edit);


module.exports = router ;