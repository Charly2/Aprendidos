"use strict"
var bodyParser = require('body-parser');

module.exports = (req, res, next) => {

    var db = req.db;
    var user = db.get('users');

    if(req.body.barrio != null ){

    user.findOneAndUpdate({ _id: req.user.id }, {
        $set: {
            'opciones.0.barrio': req.body.barrio,
            'opciones.0.mapa': req.body.mapa,
            'opciones.0.latitud': req.body.latitud,
            'opciones.0.longitud': req.body.longitud,
            'opciones.0.direccion': req.body.direccion,
            'opciones.0.domicilio': req.body.domicilio,
            'opciones.0.horarios': req.body.horarios,
            'opciones.0.tipoclases': req.body.tipoclases,
            'opciones.0.precio': Number(req.body.precio)
        }
    }, function(err, data) {

        res.redirect('/teacher/register/stepfour');

    });

    } else {
        req.flash('info', 'Seleccione el barrio correctamente');
        res.redirect('/teacher/register/steptree');
    }


}
