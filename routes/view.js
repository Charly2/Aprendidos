"use strict"

var express = require('express');
var router = express.Router();

router.get('/:id', function(req, res, next) {

	var db = req.db;
	var user = db.get('users');

	user.find({_id: req.params.id}, (err, inResult) => {
		if(err){
			return err;
 		} else {

 			res.render('viewprofile', {
 				title: 'Profile de usuario',
 				user: req.user,
 				profileView: inResult
 			})

 		}

	});


});

module.exports = router;