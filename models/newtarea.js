'use strict'

module.exports = (req, res, next) => {

	var db = req.db;
	var tareas = db.get('tareas');

	if(req.user){

		tareas.insert({
			idUser: req.user._id,
			nameuser: req.user.name,
			fotoUser: req.user.photo,
			detalle: req.body.details,
			categoria: req.body.category,
			fecha: new Date(),
			respuestas: []
		}, (err, result) => {
			if(err) return err;

			res.redirect('/tareas');
		});

	} else {

		res.redirect('/login')
	}

	


}