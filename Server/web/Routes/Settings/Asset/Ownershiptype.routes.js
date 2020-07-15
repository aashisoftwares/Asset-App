const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettings.controller');

router.post ('/Ownership_Type_Create' , Controller.Ownership_Type_Create);


module.exports = router ;