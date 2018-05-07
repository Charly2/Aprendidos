"use strict"

var shortid = require('shortid');

module.exports = (req, res, next) => {
    var db = req.db;
    var user = db.get('users');


    user.findOneAndUpdate({_id: req.user.id}, {
    	$push: {
    		teacher: {
    			'id': shortid.generate(),
    			'idUser': req.user._id,
				'fotoTeacher': req.user.photo,
				'nombreTeacher': req.body.isNombres,
				'apellidoTeacher': req.body.isApellido,
				'generoTeacher': req.body.isGenero,
				'emailTeacher': req.body.isEmail,
				'nacimientoTeacher': req.body.isDate
    		}
    	}
    }, function(err, data) {

    	res.redirect('/teacher/register/steptwo');

    });

}
