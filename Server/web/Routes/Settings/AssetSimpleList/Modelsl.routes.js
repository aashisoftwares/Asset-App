const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsSimpleList.controller');

router.post ('/Model_SList' , Controller.Model_SList);


module.exports = router ;