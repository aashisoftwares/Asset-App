const express = require ('express');
const router = express.Router();
const Controller = require ('../../Controllers/Service/Service.Controller');

router.post ('/Service_List' , Controller.Service_List);


module.exports = router ;