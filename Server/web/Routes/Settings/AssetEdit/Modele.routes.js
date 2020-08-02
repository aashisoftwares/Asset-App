const express = require ('express');
const router = express.Router();
const Controller = require ('../../../Controllers/settings/Asset/AssetSettingsEdit.controller');

router.post ('/Model_Edit' , Controller.Model_Edit);


module.exports = router ;