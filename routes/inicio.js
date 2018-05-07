var express = require('express');
var router = express.Router();

var url = require('url');



router.get('/', function(req, res, next) {

    var db = req.db;
    var user = db.get('users');

    var array = [];

    user.find({}, function(err, docHome) {
        if (err) return err;

        res.render('inicio', {
            title: 'Aprendidos',
            user: req.user,
            home: docHome.reverse(),
            seoaprendidos: 'Aprendidos, profesores a un clic de distancia. Elegí a tu profesor particular de acuerdo a tu conveniencia y necesidades.'
        });

    });


});


router.get('/edinson', function(req, res, next){

    var db = req.db;
    var user = db.get('users');
    user.find({}, function(err, resolt){
        res.json(resolt);
    });

});

router.get('/nosotros', function(req, res, next) {

    res.render('nosotros', {
        title: 'Nosotros - Aprendidos',
        user: req.user,
        menuNav: 'nosotros',
        seoaprendidos: 'Somos un equipo de personas que creemos en la educación de calidad y en que todos aprenden de formas diferentes. '
    });

});

router.get('/prensa', function(req, res, next) {

    res.render('prensa', {
        title: 'Prensa - Aprendidos',
        user: req.user,
        seoaprendidos: 'Nuestra misión es conectar alumnos con profesores particulares teniendo en cuenta los requerimientos de cada usuario. '
    });

});
router.get('/terminos-y-condiciones', function(req, res, next) {

    res.render('terminos', {
        title: 'Terminos y Condiciones - Aprendidos',
        user: req.user,
        seoaprendidos: 'Nuestra misión es conectar alumnos con profesores particulares teniendo en cuenta los requerimientos de cada usuario. '
    });

});

router.get('/preguntas-frecuentes', function(req, res, next) {

    res.render('preguntas-frecuentes', {
        title: 'Preguntas Frecuentes - Aprendidos',
        user: req.user,
        seoaprendidos: 'Trabajamos de forma dinámica, responsable y consciente de las necesidades de nuestros usuarios, como así también de los profesores que forman parte de nuestro sitio.'
    });

});

router.get('/plataforma', function(req, res, next) {

    res.render('plataforma', {
        title: 'Plataforma - Aprendidos',
        user: req.user,
        seoaprendidos: 'Guía para manejar nuestra plataforma'
    });

});

router.get('/register', function(req, res, next) {

    if (req.user) {
        res.redirect('/')
    } else {
        res.render('register', {
            title: 'Register - Aprendidos',
            seoaprendidos: 'Te estamos esperando, únete a aprendidos con facebook, twitter o email'
        });
    }
});


router.get('/teacher/register', function(req, res, next) {

    if (req.user) {
        res.render('teachercontinueregister', {
            title: 'Registrar mi perfil de profesor',
            user: req.user,
            menuNav: 'teacheregister'
        })
    } else {
        res.redirect('/register');
    }

});

router.get('/teacher/register/:geturl', function(req, res, next) {

    var toparams = req.params.geturl;

    if (req.user) {

        if (toparams == 'stepone') {

            //to verify user in stepone

            if (req.user.teacher) {

                res.render('teacherexistone', {
                    title: 'Enseñar - Aprendidos',
                    user: req.user
                });

            } else {

                verifyToStep();

            }

            //call to function

            function verifyToStep() {

                var verifyComplet = req.user.photo;

                if (verifyComplet.length > 0) {

                    res.render('teachernew', {
                        title: 'Enseñar - Aprendidos',
                        user: req.user
                    });
                } else {
                    res.redirect('/profile');
                }



            }


        } else if (toparams == 'steptwo') {

            var db = req.db;
            var materias = db.get('materias');

            materias.find({}, function(err, resultMat) {
                if (err) {
                    return err;
                } else {
                    
                    resultMat.sort(function(a, b) {
                        if (a.name < b.name) return -1;
                        if (a.name > b.name) return 1;

                        return 0
                    });

                    if (req.user.materias) {

                        res.render('teacherexisttwo', {
                            title: 'Enseñar - Aprendidos',
                            user: req.user,
                            mate: resultMat
                        });

                    } else {


                        res.render('teachernewtwo', {
                            title: 'Enseñar - Aprendidos',
                            user: req.user,
                            mate: resultMat
                        });

                    }

                }

            });




        } else if (toparams == 'steptree') {

            if (req.user.opciones) {

                res.render('teacherexisttree', {
                    title: 'Enseñar - Aprendidos',
                    user: req.user
                });

            } else {

                res.render('teachernewtree', {
                    title: 'Enseñar - Aprendidos',
                    user: req.user
                });

            }

        } else if (toparams == 'stepfour') {

            if (req.user.contacto) {

                res.render('teacherexistfour', {
                    title: 'Enseñar - Aprendidos',
                    user: req.user
                });

            } else {

                res.render('teacherfour', {
                    title: 'Enseñar - Aprendidos',
                    user: req.user
                });

            }

        } else if (toparams == 'finish') {


            if (req.user.materias && req.user.opciones && req.user.contacto) {

                res.render('teacherfinish', {
                    title: 'Enseñar - Aprendidos',
                    user: req.user
                });

            } else {
                res.redirect('/teacher/register/stepone');
            }

        }

    } else {
        res.redirect('/register');
    }

    /*if (req.user) {



    } else {
        res.redirect('/register');
    }*/

});



router.get('/register/continue/email', function(req, res, next) {
    res.render('continue_email', {
        title: 'Continue su proceso de registro -  Aprendidos'
    });
});

router.get('/login', function(req, res, next) {

    if (req.user) {
        res.redirect('/');
    } else {
        res.render('login', {
            title: 'Ingresar - Aprendidos',
            seoaprendidos: 'Ingresa a aprendios con facebook, twitter o email',
            menuNav: 'login'
        });
    }
});

router.get('/resetpassword', function(req, res, next) {

    if (req.user) {
        res.redirect('/');
    } else {

        res.render('resetpassword', {
            title: 'Resetear tu contraseña - Aprendidos',
            seoaprendidos: 'Recupera tu contraseña ingresando tu email y te enviaremos los detalles para ingresar nuevamente',
            menuNav: 'resetpassword'
        });
    }

});

router.get('/anunciantes', function(req, res, next) {

    if (req.user) {
        if (req.user.statusteacher) {

            res.render('anunciantes', {
                title: 'Anunciar - Aprendidos',
                user: req.user,
                seoaprendidos: 'Anuncia en aprendidos y obtén mayores resultados con tus clases',
                menuNav: 'anunciantes'
            })

        } else {
            res.redirect('/profile');
        }
    } else {

        res.redirect('/login');

    }

});



module.exports = router;
