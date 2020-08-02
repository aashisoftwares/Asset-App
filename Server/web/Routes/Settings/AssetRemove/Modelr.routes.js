const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsRemove.controller');

router.post ('/Model_Remove' , Controller.Model_Remove);


module.exports = router ;