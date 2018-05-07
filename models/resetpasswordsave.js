"use strict"

module.exports = (req, res, next) => {


	var db = req.db;
	var user = db.get('users');

	if(req.body.password == req.body.confirmpassword) {

		user.findOneAndUpdate({_id: req.user.id}, {
			$set: {
				'password': req.body.password,
				'resetPassword': false
			}
		}, (err, docResult) => {
			if(err) return err;

			req.flash('info', 'Felicidades la contraseña se cambio correctamente');
			res.redirect('/profile/changepassword')
		});
		
	} else {

		req.flash('info', 'Ocurrio un error, la contraseña ingresada no coinciden');
		res.redirect('/profile/changepassword')

	}
}