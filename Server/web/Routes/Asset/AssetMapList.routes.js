const express = require ('express');
const router = express.Router();
const Controller = require ('../../Controllers/Asset/Asset.controller');

router.post ('/Asset_Map_List' , Controller.Asset_Map_List);


module.exports = router ;