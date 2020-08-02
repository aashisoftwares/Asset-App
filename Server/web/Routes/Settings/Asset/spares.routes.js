const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettings.controller');

router.post ('/Spares_Create' , Controller.Spares_Create);


module.exports = router ;