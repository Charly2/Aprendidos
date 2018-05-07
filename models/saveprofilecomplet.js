"use strict"

module.exports = (req, res, next) => {

    var db = req.db;
    var user = db.get('users');

    user.find({ _id: req.user.id}, (err, resultEmail) => {

        user.findOneAndUpdate({ _id: req.body.id }, {
            $set: {
                'name': req.body.name,
                'username': req.body.surname,
                'email': req.body.email,
                'genero': req.body.genero,
                'edad': req.body.fecha
            }

        }, (err, successComplet) => {

            req.flash('info', 'Su perfil se actualizo correctamente');
            res.redirect('/profile');
        });


        /*if (resultEmail.length) {
            req.flash('info', 'El email ingresado ya existe: ' + req.body.email);
            res.redirect('/profile');
        } else {


            user.findOneAndUpdate({ _id: req.body.id }, {
                $set: {
                    'name': req.body.name,
                    'surname': req.body.surname,
                    'email': req.body.email,
                    'genero': req.body.genero,
                    'edad': req.body.fecha
                }

            }, (err, successComplet) => {

                req.flash('info', 'Su perfil se actualizo correctamente');
                res.redirect('/profile');
            });

        }*/
    });

}
