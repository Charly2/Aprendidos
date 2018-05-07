"use strict"

var shortid = require('shortid');

module.exports = (req, res, next) => {

	var db = req.db;
	var user = db.get('users');


	user.findOneAndUpdate({_id: req.user.id}, {
		$set: {
			mylike: true
		}
	}, function(err, result){
		//console.log('funciono');
	});


	user.findOneAndUpdate({_id: req.body.id}, {
		$push: {
			liketeacher: {
				'id': shortid.generate(),
				'idUser': req.user.id,
				'idTeacher': req.body.id,
				'cantidadLike': 1, 
				'date': new Date()
			}
		}
	}, function(err, done){

		try {

			res.json({inserted: done});

		} catch(err){
			return err;
		}

	});

}