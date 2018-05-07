var express = require('express');
var router = express.Router();
var url = require('url');

router.get('/:cantidadteacher', function(req, res, next) {

    var db = req.db;
    var teachers = db.get('users');

    var cantidad = 10;
    //var paginator = Number(req.params.cantidadteacher) * cantidad;
    var paginator = Number(req.params.cantidadteacher) > 0 ? ((Number(req.params.cantidadteacher) - 1) * cantidad) : 0;

    var urlshow = url.parse(req.url, true).query;


    //Buscador de profesionales recibidos o posgrado

    if (urlshow.training == 'recibido') {

        paginator = (Number(urlshow.page)) > 0 ? ((Number(urlshow.page) - 1) * cantidad) : 0;


        teachers.find({ "materias.status": "Recibido" }, { skip: paginator, limit: cantidad }, function(err, graduate) {
            if (err) return err;

            var iscanT = 0;

            graduate.forEach(function(element, index, arr) {
                iscanT += element.statusteacher;
            });


            var _ultimateOne = (Number(urlshow.page) - 1);



            teachers.find({ "materias.status": "Recibido" }, function(xhr, tic) {
                if (xhr) return xhr

                res.render('search', {
                    title: 'Buscando el profesor adecuado con Recibido - Aprendidos',
                    user: req.user,
                    menunav: 'search',
                    teachers: graduate,
                    showpage: urlshow.page,
                    pageUltimate: _ultimateOne,
                    longitudPage: iscanT,
                    menusearch: true,
                    paginatorName: 'recibido',
                    all: tic
                });

            });




        });

    } else if (urlshow.training == 'cursando') {

        paginator = (Number(urlshow.page)) > 0 ? ((Number(urlshow.page) - 1) * cantidad) : 0;

        teachers.find({ "materias.status": "Cursando" }, { skip: paginator, limit: cantidad }, function(err, cursando) {
            if (err) return err;

            var iscanT = 0;

            cursando.forEach(function(element, index, arr) {
                iscanT += element.statusteacher;
            });


            var _ultimateOne = (Number(urlshow.page) - 1);

            teachers.find({ "materias.status": "Cursando" }, function(xhr, tic) {
                if (xhr) return xhr;

                res.render('search', {
                    title: 'Buscando el profesor adecuado con Cursando - Aprendidos',
                    user: req.user,
                    menunav: 'search',
                    teachers: cursando,
                    showpage: urlshow.page,
                    pageUltimate: _ultimateOne,
                    longitudPage: iscanT,
                    menusearchrecibido: true,
                    paginatorName: 'cursando',
                    all: tic
                });

            });


        });

    } else if (urlshow.lessons == 'individuales') {

        paginator = (Number(urlshow.page)) > 0 ? ((Number(urlshow.page) - 1) * cantidad) : 0;

        teachers.find({ "opciones.tipoclases.name": { $in: ['individuales'] } }, { skip: paginator, limit: cantidad }, function(err, ind) {
            if (err) return err;

            var iscanT = 0;

            ind.forEach(function(element, index, arr) {
                iscanT += element.statusteacher;
            });

            var _ultimateOne = (Number(urlshow.page) - 1);

            teachers.find({ "opciones.tipoclases.name": { $in: ['individuales'] } }, function(xhr, tic) {

                res.render('search', {
                    title: 'Buscando el profesor individuales - Aprendidos',
                    user: req.user,
                    menunav: 'search',
                    teachers: ind,
                    showpage: urlshow.page,
                    pageUltimate: _ultimateOne,
                    longitudPage: iscanT,
                    menuindiv: true,
                    paginatorName: 'individuales',
                    all: tic
                });

            });


        });


    } else if (urlshow.lessons == 'grupales') {

        paginator = (Number(urlshow.page)) > 0 ? ((Number(urlshow.page) - 1) * cantidad) : 0;

        teachers.find({ "opciones.tipoclases.name": { $in: ['grupales'] } }, { skip: paginator, limit: cantidad }, function(err, grup) {
            if (err) return err;

            var iscanT = 0;

            grup.forEach(function(element, index, arr) {
                iscanT += element.statusteacher;
            });

            var _ultimateOne = (Number(urlshow.page) - 1);

            teachers.find({ "opciones.tipoclases.name": { $in: ['grupales'] } }, function(xhr, tic) {
                if (xhr) return xhr;

                res.render('search', {
                    title: 'Buscando el profesor individuales - Aprendidos',
                    user: req.user,
                    menunav: 'search',
                    teachers: grup,
                    showpage: urlshow.page,
                    pageUltimate: _ultimateOne,
                    longitudPage: iscanT,
                    menugrupal: true,
                    paginatorName: 'grupales',
                    all: tic
                });

            });


        });

    } else if (urlshow.car == 'si') {

        paginator = (Number(urlshow.page)) > 0 ? ((Number(urlshow.page) - 1) * cantidad) : 0;

        teachers.find({ "opciones.domicilio": "true" }, { skip: paginator, limit: cantidad }, function(err, car) {
            if (err) return err;

            var iscanT = 0;

            car.forEach(function(element, index, arr) {
                iscanT += element.statusteacher;
            });

            var _ultimateOne = (Number(urlshow.page) - 1);

            teachers.find({ "opciones.domicilio": "true" }, function(xhr, tic) {
                if (xhr) return xhr;

                res.render('search', {
                    title: 'Buscando el profesor individuales - Aprendidos',
                    user: req.user,
                    menunav: 'search',
                    teachers: car,
                    showpage: urlshow.page,
                    pageUltimate: _ultimateOne,
                    longitudPage: iscanT,
                    menucar: true,
                    paginatorName: 'car',
                    all: tic
                });


            });


        });

    } else if (urlshow.price) {
        var str = "" + urlshow.price;

        paginator = (Number(urlshow.page)) > 0 ? ((Number(urlshow.page) - 1) * cantidad) : 0;

        teachers.find({ "opciones.precio": str }, { skip: paginator, limit: cantidad }, function(err, precing) {
            if (err) return err;

            var iscanT = 0;

            precing.forEach(function(element, index, arr) {
                iscanT += element.statusteacher;
            });

            var _ultimateOne = (Number(urlshow.page) - 1);

            var isClass = Number(urlshow.price);

            if (isClass > 0) {
                isClass = true
            } else {
                isClass = false
            }

            teachers.find({ "opciones.precio": str }, function(xhr, tic) {

                if (xhr) return xhr;


                res.render('search', {
                    title: 'Buscando el profesor adecuado - Aprendidos',
                    user: req.user,
                    menunav: 'search',
                    teachers: precing,
                    showpage: urlshow.page,
                    pageUltimate: _ultimateOne,
                    longitudPage: iscanT,
                    numberPrice: urlshow.price,
                    showClass: isClass,
                    paginatorName: 'price',
                    all: tic
                });

            });

        });


    } else if (urlshow.hour) {

        paginator = (Number(urlshow.page)) > 0 ? ((Number(urlshow.page) - 1) * cantidad) : 0;

        teachers.find({ "opciones.horarios.name": { $in: [urlshow.hour] } }, { skip: paginator, limit: cantidad }, function(err, showhour) {

            if (err) return err;

            var iscanT = 0;

            showhour.forEach(function(element, index, arr) {
                iscanT += element.statusteacher;
            });

            var _ultimateOne = (Number(urlshow.page) - 1);

            teachers.find({ "opciones.horarios.name": { $in: [urlshow.hour] } }, function(xhr, tic) {

                if (xhr) return xhr;


                res.render('search', {
                    title: 'Buscando el profesor adecuado - Aprendidos',
                    user: req.user,
                    menunav: 'search',
                    teachers: showhour,
                    showpage: urlshow.page,
                    pageUltimate: _ultimateOne,
                    longitudPage: iscanT,
                    menuhour: urlshow.hour,
                    paginatorName: 'hour',
                    all: tic
                });


            });



        });

    } else if (urlshow.averageRating) {

        paginator = (Number(urlshow.page)) > 0 ? ((Number(urlshow.page) - 1) * cantidad) : 0;



        var sum = 0;

        if (urlshow.averageRating > 5) {

            res.redirect('/search/find?averageRating=1&page=0')

        } else {

            teachers.find({ "calificacion.calificacion": { $in: [urlshow.averageRating] } }, { skip: paginator, limit: cantidad }, function(err, resultRating) {


                if (err) return err;

                var iscanT = 0;

                resultRating.forEach(function(element, index, arr) {
                    iscanT += element.statusteacher;
                });

                var _ultimateOne = (Number(urlshow.page) - 1);


                teachers.find({ "calificacion.calificacion": { $in: [urlshow.averageRating] } }, function(xhr, tic) {

                    if (xhr) return xhr;

                    res.render('search', {
                        title: 'Buscando el profesor adecuado - Aprendidos',
                        user: req.user,
                        menunav: 'search',
                        teachers: resultRating,
                        showpage: urlshow.page,
                        pageUltimate: _ultimateOne,
                        longitudPage: iscanT,
                        menuRating: urlshow.averageRating,
                        paginatorName: 'rating',
                        all: tic
                    });

                });



            });

        }

    } else if (urlshow.geo) {

        paginator = (Number(urlshow.page)) > 0 ? ((Number(urlshow.page) - 1) * cantidad) : 0;

        var mathR = Math.random();


        teachers.find({ 'random': { $gt: mathR } }, { skip: paginator, limit: cantidad }, function(err, showGeo) {

            if (err) return err;

            var iscanT = 0;

            showGeo.forEach(function(element, index, arr) {
                iscanT += element.statusteacher;
            });

            var _ultimateOne = (Number(urlshow.page) - 1);

            teachers.find({ 'random': { $gt: mathR } }, function(xhr, tic) {
                if (xhr) return xhr;


                res.render('search', {
                    title: 'Buscando el profesor adecuado - Aprendidos',
                    user: req.user,
                    menunav: 'search',
                    teachers: showGeo,
                    showpage: urlshow.page,
                    pageUltimate: _ultimateOne,
                    longitudPage: iscanT,
                    menugeora: urlshow.geo,
                    paginatorName: 'georandomg',
                    isNumber: mathR,
                    all: tic
                });

            });



        });

    } else if (urlshow.rtp) {

        paginator = (Number(urlshow.page)) > 0 ? ((Number(urlshow.page) - 1) * cantidad) : 0;

        var mathR = Math.random();


        teachers.find({ 'calificacion': { $exists: true } }, { skip: paginator, limit: cantidad, sort: { 'calificacion.calificacion': -1 } }, function(err, rtp) {

            if (err) return err;

            var iscanT = 0;

            rtp.forEach(function(element, index, arr) {
                iscanT += element.statusteacher;
            });

            var _ultimateOne = (Number(urlshow.page) - 1);

            teachers.find({ 'calificacion': { $exists: true } }, function(xhr, tic) {
                if (xhr) return xhr;

                res.render('search', {
                    title: 'Buscando el profesor adecuado - Aprendidos',
                    user: req.user,
                    menunav: 'search',
                    teachers: rtp,
                    showpage: urlshow.page,
                    pageUltimate: _ultimateOne,
                    longitudPage: iscanT,
                    menurtp: urlshow.rtp,
                    paginatorName: 'menurtp',
                    isNumber: mathR,
                    all: tic
                });

            });



        });

    } else if (urlshow.ptn) {

        paginator = (Number(urlshow.page)) > 0 ? ((Number(urlshow.page) - 1) * cantidad) : 0;

        var mathR = Math.random();


        teachers.find({ 'calificacion': { $exists: true } }, { skip: paginator, limit: cantidad, sort: { 'calificacion.calificacion': +1 } }, function(err, ptn) {

            if (err) return err;

            var iscanT = 0;

            ptn.forEach(function(element, index, arr) {
                iscanT += element.statusteacher;
            });

            var _ultimateOne = (Number(urlshow.page) - 1);

            teachers.find({ 'calificacion': { $exists: true } }, function(xhr, tic) {
                if (xhr) return xhr;

                res.render('search', {
                    title: 'Buscando el profesor adecuado - Aprendidos',
                    user: req.user,
                    menunav: 'search',
                    teachers: ptn,
                    showpage: urlshow.page,
                    pageUltimate: _ultimateOne,
                    longitudPage: iscanT,
                    menuptn: urlshow.ptn,
                    paginatorName: 'menuptn',
                    isNumber: mathR,
                    all: tic
                });

            });



        });

    } else if (urlshow.pre) {

        paginator = (Number(urlshow.page)) > 0 ? ((Number(urlshow.page) - 1) * cantidad) : 0;

        var mathR = Math.random();


        teachers.find({ 'statusteacher': true }, { skip: paginator, limit: cantidad, sort: { 'opciones.precio': +1 } }, function(err, result) {

            if (err) return err;

            var iscanT = 0;

            result.forEach(function(element, index, arr) {
                iscanT += element.statusteacher;
            });


            var _ultimateOne = (Number(urlshow.page) - 1);

            teachers.find({ 'statusteacher': true }, function(xhr, tic) {
                if (xhr) return xhr;

                res.render('search', {
                    title: 'Buscando el profesor adecuado - Aprendidos',
                    user: req.user,
                    menunav: 'search',
                    teachers: result,
                    showpage: urlshow.page,
                    pageUltimate: _ultimateOne,
                    longitudPage: iscanT,
                    menupre: urlshow.pre,
                    paginatorName: 'menupre',
                    isNumber: mathR,
                    all: tic
                });

            })



        });


    } else if (urlshow.upri) {

        paginator = (Number(urlshow.page)) * cantidad;

        var mathR = Math.random();



        teachers.find({}, { skip: paginator, limit: cantidad, sort: { 'opciones.precio': -1 } }, function(err, upPrice) {

            if (err) return err;

            var iscanT = 0;

            upPrice.forEach(function(element, index, arr) {
                iscanT += element.statusteacher;
            });

            var _ultimateOne = (Number(urlshow.page) - 1);

            teachers.find({}, function(xhr, tic) {
                if (xhr) return err;


                res.render('search', {
                    title: 'Buscando el profesor adecuado - Aprendidos',
                    user: req.user,
                    menunav: 'search',
                    teachers: upPrice,
                    showpage: urlshow.page,
                    pageUltimate: _ultimateOne,
                    longitudPage: iscanT,
                    menuuppri: urlshow.upri,
                    paginatorName: 'upprice',
                    isNumber: mathR,
                    all: tic
                });

            });



        });


    } else if (urlshow.aleatorio) {

        paginator = (Number(urlshow.page)) * cantidad;

        var mathR = Math.random();


        teachers.find({ 'random': mathR }, { skip: paginator, limit: cantidad }, function(err, showAleatorio) {

            if (err) return err;

            var iscanT = 0;

            showAleatorio.forEach(function(element, index, arr) {
                iscanT += element.statusteacher;
            });

            var _ultimateOne = (Number(urlshow.page) - 1);

            teachers.find({ 'random': mathR }, function(xhr, tic) {

                res.render('search', {
                    title: 'Buscando el profesor adecuado - Aprendidos',
                    user: req.user,
                    menunav: 'search',
                    teachers: showAleatorio,
                    showpage: urlshow.page,
                    pageUltimate: _ultimateOne,
                    longitudPage: iscanT,
                    menuuppri: urlshow.aleatorio,
                    paginatorName: 'aleatorio',
                    isNumber: mathR,
                    all: tic
                });

            });



        });


    } else if (urlshow.barrio && urlshow.materias && urlshow.page) {

        paginator = (Number(urlshow.page)) * cantidad;

        /*teachers.find({'opciones.barrio': {$in: [urlshow.barrio]}}, {'materias.clases.id': {$in: [urlshow.barrio]}}, function(err, resultForm){
            console.log(resultForm);
        });*/

        /*teachers.find({'opciones.barrio': {$in: [urlshow.barrio]}, 'materias.clases.id': {$in: [urlshow.materias]} }, function(err, done){
            console.log(done.length);
        });*/

        /*if (urlshow.materias.length == 3) {

            teachers.find({ 'opciones.barrio': { $in: [urlshow.barrio] }, 'materias.clases.id': { $in: [urlshow.materias] } }, { skip: paginator, limit: cantidad }, function(err, done) {

                if (err) return err;

                var iscanT = 0;

                done.forEach(function(element, index, arr) {
                    iscanT += element.statusteacher;
                });

                var _ultimateOne = (Number(urlshow.page) - 1);

                res.render('search', {
                    title: 'Buscando el profesor adecuado - Aprendidos',
                    user: req.user,
                    menunav: 'search',
                    teachers: done,
                    showpage: urlshow.page,
                    pageUltimate: _ultimateOne,
                    longitudPage: iscanT,
                    menuhour: urlshow.hour,
                    queryComplet: urlshow,
                    paginatorName: 'complet'
                });

                console.log('estoy aqui');

            });

        } else {

            var inSearch = urlshow.materias.split(',');

            teachers.find({ 'opciones.barrio': { $in: [urlshow.barrio] }, 'materias.clases.id': { $in: inSearch } }, { skip: paginator, limit: cantidad }, function(err, done) {


                if (err) return err;

                var iscanT = 0;

                done.forEach(function(element, index, arr) {
                    iscanT += element.statusteacher;
                });

                var _ultimateOne = (Number(urlshow.page) - 1);

                res.render('search', {
                    title: 'Buscando el profesor adecuado - Aprendidos',
                    user: req.user,
                    menunav: 'search',
                    teachers: done,
                    showpage: urlshow.page,
                    pageUltimate: _ultimateOne,
                    longitudPage: iscanT,
                    menuhour: urlshow.hour
                });

            });
        }*/



        teachers.find({
                'opciones.barrio.name': { $in: [urlshow.barrio] },
                'materias.clases': {
                    $elemMatch: { name: urlshow.materias }
                }
            }, { skip: paginator, limit: cantidad },
            function(err, done) {

                if (err) return err;

                var iscanT = 0;

                done.forEach(function(element, index, arr) {
                    iscanT += element.statusteacher;
                });

                var _ultimateOne = (Number(urlshow.page) - 1);


                teachers.find({
                        'opciones.barrio.name': { $in: [urlshow.barrio] },
                        'materias.clases': {
                            $elemMatch: { name: urlshow.materias }
                        }
                    },
                    function(err, tic) {

                        if (err) return err;

                        res.render('search', {
                            title: 'Buscando el profesor adecuado - Aprendidos',
                            user: req.user,
                            menunav: 'search',
                            teachers: done,
                            showpage: urlshow.page,
                            pageUltimate: _ultimateOne,
                            longitudPage: iscanT,
                            menuhour: urlshow.hour,
                            queryComplet: urlshow,
                            paginatorName: 'complet',
                            all: tic
                        });



                    });


            });

        /*teachers.find({'opciones.barrio.name': { $in: [urlshow.barrio] }, 
          'materias.clases': {
            $elemMatch: {name: urlshow.materias}
          }
         }, function(err, done) {
            console.log(done);
         });*/


    } else {



        teachers.find({ 'statusteacher': true }, { skip: paginator, limit: 10 }, function(err, show) {
            if (err) {
                return err;
            } else {

                var iscanT = 0;

                show.forEach(function(element, index, arr) {
                    iscanT += element.statusteacher;

                });

                var _ultimateOne = (Number(req.params.cantidadteacher) - 1);

                teachers.find({ 'statusteacher': true }, function(xr, tic) {
                    if (err) return xr;

                    res.render('search', {
                        title: 'Buscando el profesor adecuado - Aprendidos',
                        user: req.user,
                        menunav: 'search',
                        teachers: show,
                        showpage: req.params.cantidadteacher,
                        seoaprendidos: 'Aprendidos, profesores a un clic de distancia. Elegí a tu profesor particular de acuerdo a tu conveniencia y necesidades.',
                        pageUltimate: _ultimateOne,
                        longitudPage: iscanT,
                        all: tic
                    });
                });



            }
        });

    }


    //Buscador de clases individuales




});

module.exports = router;
