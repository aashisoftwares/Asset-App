const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettings.controller');

router.post ('/Model_Create' , Controller.Model_Create);


module.exports = router ;