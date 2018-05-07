"use strict"
var fs = require('fs');
var path = require('path');

var shortid = require('shortid');

module.exports = (req, res, next) => {

    console.log(req.body);

    var db = req.db;
    var user = db.get('users');


    user.findOneAndUpdate({ _id: req.user.id }, {
        $set: {
            'photo': '/users/avataraprendidos.jpg',
            'edad': req.body.fecha,
            'genero': req.body.genero
        }
    }, (err, success) => {
        if (err) return err;

        req.flash('info', 'Su perfil se actualizo correctamente');
        res.redirect('/profile');
    })

}
