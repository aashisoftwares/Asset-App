const express = require ('express');
const router = express.Router();
const Controller = require ('../../Controllers/Asset/Asset.controller');

router.post ('/Asset_Create' , Controller.Asset_Create);


module.exports = router ;