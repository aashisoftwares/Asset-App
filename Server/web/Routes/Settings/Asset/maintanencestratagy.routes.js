const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettings.controller');

router.post ('/Maintain_Stratagy_Create' , Controller.Maintain_Stratagy_Create);


module.exports = router ;