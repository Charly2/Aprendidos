'use strict'

module.exports = (req, res, next, tareaid) => {

	var db = req.db;
	var tareas = db.get('tareas');

	tareas.find({'_id': tareaid}, (err, done) => {
		if(err) return err;

		console.log(done);

		res.render('viewtarea', {
			 title: done[0].detalle + ' Aprendidos',
	         user: req.user,
	         menuNav: 'tareas',
	         post: done
		})
	});

}