const express = require ('express');
const router = express.Router();
const Controller = require ('../../Controllers/Service/Service.Controller');

router.post ('/Service_View' , Controller.Service_View);


module.exports = router ;