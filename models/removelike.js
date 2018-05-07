"use strict"

var shortid = require('shortid');

module.exports = (req, res, next) => {

	var db = req.db;
	var user = db.get('users');


	user.findOneAndUpdate({_id: req.user._id}, {
		$set: {
			mylike: false
		}
	}, function(err, result){
		//console.log('funciono');
	});


	user.update({ _id: req.body.id }, {
        $pull: {
        	liketeacher: {
        		id: req.body.idlikeremove
        	}
        }
    }, function(err, result) {
        try {
            res.json({ 'remove': true })
        } catch (err) {
            return err;
        }

    });



}