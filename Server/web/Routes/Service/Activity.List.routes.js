const express = require ('express');
const router = express.Router();
const Controller = require ('../../Controllers/Service/Service.Controller');

router.post ('/Activity_List' , Controller.Activity_List);


module.exports = router ;