'use strict'

module.exports = (req, res, next) => {

	var db = req.db;
	var tareas = db.get('tareas');

	tareas.find({}, (err, work) => {
		if(err) return err;

		res.render('tareas', {
			 title: 'Aprendizaje efectivo en grupo"',
	         user: req.user,
	         menuNav: 'tareas',
	         posts: work.reverse()
		});
	})

	

}