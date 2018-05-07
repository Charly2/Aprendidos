var express = require('express');
var router = express.Router();


var findteacher = require('../models/findteacher');
var review = require('../models/review');

router.get('/', function(req, res, next){
	res.render('teacher', {
		title: 'Profesor Edinson - Aprendidos'
	});
});

router.get('/:id', function(req, res, next){
	var isid = req.params.id;
	findteacher(isid, req ,res, next);
});

router.get('/:id/review', function(req, res, next){
	var isid = req.params.id;

	if(req.user){
		review(isid, req, res, next);
	} else {
		res.redirect('/register');
	}
});



module.exports = router;