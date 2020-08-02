const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsEdit.controller');

router.post ('/Spares_Edit' , Controller.Spares_Edit);


module.exports = router ;