const express = require ('express');
const router = express.Router();
const Controller = require ('../../Controllers/Asset/Asset.controller');

router.get ('/Asset_List' , Controller.Asset_List);


module.exports = router ;