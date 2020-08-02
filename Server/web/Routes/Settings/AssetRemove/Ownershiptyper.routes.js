const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsRemove.controller');

router.post ('/Ownership_Type_Remove' , Controller.Ownership_Type_Remove);


module.exports = router ;