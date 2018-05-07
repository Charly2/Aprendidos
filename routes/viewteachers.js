'use strict'

var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {

	var db = req.db;
	var users = db.get('users');

	users.find({}, (err, result) => {
		if(err) return err;

		res.render('viewteachersemail', {
			title: 'Teacher Email',
			show: result
		});
	});

});

module.exports = router;