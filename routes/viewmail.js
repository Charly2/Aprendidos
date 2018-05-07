"use strict"

var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {

	var db = req.db;
	var user = db.get('users');

	user.find({}, (err, result) => {
		res.render('viewmail', {
			title: 'View Mailing',
			show: result
		});
	})


});

module.exports = router;