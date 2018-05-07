var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){

	var db = req.db;
	var city = db.get('city');

	city.find({}, function(err, Result) {


		res.render('addingcities', {
			title: 'Agregar ciudades',
			cinties: Result
		});

	});


});


router.post('/save', function(req, res, next) {

	var db = req.db;
	var city = db.get('city');

	var obj = {};

	var _isNameCity = req.body.iscity;

	obj[_isNameCity] = null;
	obj['name'] = _isNameCity;

	city.insert(obj, function(err, success) {
		if(err) return err;

		res.redirect('/adcities-codei-gofjg');
	});

});

router.get('/json', function(req ,res, next){

	var db = req.db;
	var incity = db.get('city');

	incity.find({}, function(err, indet){
		if(err) return err;

		res.json(indet);
	});

});

router.post('/delete', function(req, res, next) {

	var db = req.db;
	var city = db.get('city');

	city.remove({_id: req.body.id}, function(err, resultShow){
		if(err) return err;

		indet.sort(function(a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;

            return 0
        });

		res.json({result: true});

	});


});

module.exports = router;