var express = require('express');
var router = express.Router();


////////////////////////
//Reseteamos el email //
////////////////////////
var resetemail = require('../models/resetpassword');
router.post('/password', function(req, res, next){
	resetemail(req, res, next);
});

module.exports = router;