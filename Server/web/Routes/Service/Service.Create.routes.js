const express = require ('express');
const router = express.Router();
const Controller = require ('../../Controllers/Service/Service.Controller');

router.post ('/Service_Create' , Controller.Service_Create);


module.exports = router ;