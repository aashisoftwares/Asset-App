const express = require ('express');
const router = express.Router();
const Controller = require ('../../Controllers/Basic/register.controller');

router.post ('/company_register' , Controller.company_register);

// router.post ('/company_register' , (req, res) => { Controller.company_register });



module.exports = router ;