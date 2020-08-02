const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsRemove.controller');

router.post ('/Spares_Remove' , Controller.Spares_Remove);


module.exports = router ;