const express = require ('express');
const router = express.Router();
const Controller = require ('../../Controllers/Asset/Asset.controller');

router.post ('/Asset_Map' , Controller.Asset_Map);


module.exports = router ;