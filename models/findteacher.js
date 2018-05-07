"use strict"

module.exports = (id, req, res, next) => {

	var db = req.db;
	var user = db.get('users');

	if(id.length >= 22) {

		user.find({_id: id}, function(err, doc){
			if(err){
				return err;
			} else {
				verify(doc);
			}
		});

		function verify(data){

			var isSeo = data[0].teacher[0].nombreTeacher + ' ' +data[0].teacher[0].apellidoTeacher  + ' Es profesor particular en aprendidos, contácta con el/ella';
			console.log(isSeo);
			res.render('teacher', {
				title: 'Profesor',
				teacher: data,
				user: req.user,
				seoaprendidos: data[0].teacher[0].nombreTeacher + ' ' +data[0].teacher[0].apellidoTeacher  + ' Es profesor particular en aprendidos, contácta con el/ella'
			});
		}

	} else {
		
		res.render('error', {
			title: 'Error Teacher'
		});	
	}


}