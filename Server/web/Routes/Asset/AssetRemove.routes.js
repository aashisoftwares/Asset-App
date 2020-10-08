const express = require ('express');
const router = express.Router();
const Controller = require ('../../Controllers/Asset/Asset.controller');

router.post ('/Asset_Remove' , Controller.Asset_Remove);


module.exports = router ;