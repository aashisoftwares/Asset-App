const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsEdit.controller');

router.post ('/Maintain_Stratagy_Edit' , Controller.Maintain_Stratagy_Edit);


module.exports = router ;