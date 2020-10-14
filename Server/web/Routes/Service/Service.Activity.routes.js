const express = require ('express');
const router = express.Router();
const Controller = require ('../../Controllers/Service/Service.Controller');

router.post ('/Service_Activity' , Controller.Service_Activity);


module.exports = router ;