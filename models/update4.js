"use strict"

module.exports = (req, res, next) => {

    var db = req.db;
    var user = db.get('users');


    user.findOneAndUpdate({ _id: req.user.id }, {
        $set: {
            'contacto.0.telefono': req.body.isphone,
            'contacto.0.mensajealumnos': req.body.istxtmsn,
            'contacto.0.mensajewtp': req.body.iswtp,
            'contacto.0.details': req.body.isdetails
        }
    }, function(err, data) {

        res.redirect('/teacher/register/finish');

    });


}
