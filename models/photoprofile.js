"use strict"

var fs = require('fs');
var path = require('path');

var shortid = require('shortid');

module.exports = (req, res, next) => {
    var db = req.db;
    var user = db.get('users');

    var largePhoto = req.files.file.size;

    if(largePhoto < 150000) {
        fs.readFile(req.files.file.path, function(err, bufferIMG) {

            if (err) return err;

            var completName = shortid.generate() + req.files.file.name;

            var isDirectory = path.join(__dirname, '..', 'public/', 'users/' + completName);


            fs.writeFile(isDirectory, bufferIMG, (xerr) => {
                if (xerr) return xerr;


                if(req.user.teacher) {

                    user.findOneAndUpdate({ _id: req.user.id }, {
                        $set: {
                            'teacher.0.fotoTeacher': '/users/' + completName
                        }
                    });
                    
                } else {

                }




                user.findOneAndUpdate({ _id: req.user.id }, {
                    $set: {
                        'photo': '/users/' + completName
                    }
                }, (nerr, resultIMG) => {

                    if (nerr) {
                        return nerr;
                    } else {

                        req.flash('info', 'Su foto se subio y actualizo correctamente');
                        res.redirect('/profile');
                    }

                });

            })

        });

    } else {
        req.flash('info', 'Ocurrio un error, la foto que subio pesa demasiado, porfavor intente con otra foto. que pese menos de  300bytes, recomendacion 320px x 320px');
        res.redirect('/profile');
    }

    console.log(req.files.file.size)


}
