'use strict'

module.exports = (req, res, next) => {

	var db = req.db;
	var tareas = db.get('tareas');

	tareas.findOneAndUpdate({'_id': req.body.idrespuesta}, {
		$push: {
			respuestas: {
				idUser: req.user._id,
				fotoUser: req.user.photo,
				nameuser: req.user.name,
				idRespuesta: req.body.idrespuesta,
				respuesta: req.body.respuesta,
				fecha: new Date()
			}
		}
	}, (err, result) => {
		if(err) return err;

		res.redirect('/tareas/view/' + req.body.idrespuesta);
	})

}