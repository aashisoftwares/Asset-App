const express = require ('express');
const router = express.Router();
const Controller = require ('../../Controllers/Basic/register.controller');


router.post('/User_Login',  Controller.User_Login );

module.exports = router ;