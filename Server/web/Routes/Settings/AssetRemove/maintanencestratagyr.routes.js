const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsRemove.controller');

router.post ('/Maintain_Stratagy_Remove' , Controller.Maintain_Stratagy_Remove);


module.exports = router ;