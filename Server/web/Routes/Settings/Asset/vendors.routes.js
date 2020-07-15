const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettings.controller');

router.post ('/Vendors_Create' , Controller.Vendors_Create);


module.exports = router ;