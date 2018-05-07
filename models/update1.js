"use strict"

var shortid = require('shortid');

module.exports = (req, res, next) => {
    var db = req.db;
    var user = db.get('users');

    user.findOneAndUpdate({ _id: req.user.id }, {
        $set: {

            'teacher.0.idUser': req.user.id,
            'teacher.0.fotoTeacher': req.user.photo,
            'teacher.0.nombreTeacher': req.body.isNombres,
            'teacher.0.apellidoTeacher': req.body.isApellido,
            'teacher.0.generoTeacher': req.body.isGenero,
            'teacher.0.emailTeacher': req.body.isEmail,
            'teacher.0.nacimientoTeacher': req.body.isDate

        }
    }, function(err, data) {

        res.redirect('/teacher/register/steptwo');

    });

}
