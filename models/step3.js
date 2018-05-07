"use strict"
var bodyParser = require('body-parser');

module.exports = (req, res, next) => {

	var db = req.db;
    var user = db.get('users');

    console.log(req.body.barrio);



/*    user.findOneAndUpdate({_id: req.user.id}, {
        $push: {
            'barrio': req.body.barrio
        }
    });*/

    if(req.body.barrio != null){

        user.findOneAndUpdate({_id: req.user.id}, {
        	$push: {
        	   opciones: {
                    'barrio': req.body.barrio,
                    'mapa': req.body.mapa,
                    'latitud': req.body.latitud,
                    'longitud': req.body.longitud,
                    'direccion': req.body.direccion,
        			'domicilio': req.body.domicilio,
                    'horarios': req.body.horarios,
                    'tipoclases': req.body.tipoclases,
                    'precio': Number(req.body.precio)
        			
        		}
        	}
        }, function(err, data) {

        	res.redirect('/teacher/register/stepfour');

        });
    } else {

        req.flash('info', 'Seleccione el barrio correctamente');
        res.redirect('/teacher/register/steptree');
    }


	
}