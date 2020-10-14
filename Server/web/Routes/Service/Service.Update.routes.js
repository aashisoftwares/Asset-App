const express = require ('express');
const router = express.Router();
const Controller = require ('../../Controllers/Service/Service.Controller');

router.post ('/Service_Update' , Controller.Service_Update);


module.exports = router ;