const express = require ('express');
const router = express.Router();
const Controller = require ('../../Controllers/Basic/register.controller');


router.post('/User_Create', Controller.User_Create );

module.exports = router ;