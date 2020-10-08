const express = require ('express');
const router = express.Router();
const Controller = require ('../../Controllers/Asset/Asset.controller');

router.post ('/Asset_Img' , Controller.Asset_Img);


module.exports = router ;