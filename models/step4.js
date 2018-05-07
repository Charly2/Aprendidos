"use strict"

module.exports = (req, res, next) => {

	var db = req.db;
    var user = db.get('users');
    

    user.findOneAndUpdate({_id: req.user.id}, {
    	$push: {
    		contacto: {
    			'telefono': req.body.isphone,
    			'mensajealumnos': req.body.istxtmsn,
    			'mensajewtp': req.body.iswtp,
    			'details': req.body.isdetails 
    			
    		},
    	},
        $set: {
            statusteacher: true
        }
    }, function(err, data) {

    	res.redirect('/teacher/register/finish');

    });
	

}