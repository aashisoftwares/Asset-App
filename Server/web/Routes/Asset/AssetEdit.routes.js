const express = require ('express');
const router = express.Router();
const Controller = require ('../../Controllers/Asset/Asset.controller');

router.post ('/Asset_Edit' , Controller.Asset_Edit);


module.exports = router ;