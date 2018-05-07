var express = require('express');
var router = express.Router();

router.get('/:numberpage', function(req, res, next) {

	var db = req.db;
	var user = db.get('users');

	var cantidad = 10;
	var pagination = Number(req.params.numberpage) * cantidad;


	user.find({}, { skip: pagination, limit: cantidad }, function(err, resultData){
		
		    res.render('profilelist', {
		        title: 'Alumnos registrados - Aprendidos',
		        usuariosFinish: resultData,
		        pagination: req.params.numberpage
		    });

	});


});

module.exports = router;
