var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    var db = req.db;
    var materias = db.get('materias');

    materias.find({}, function(err, resultDoc) {
        if (err) return err;

        res.render('addingmateries', {
            title: 'Añadir materias',
            materias: resultDoc
        });


    });


});

router.post('/save', function(req, res, next) {
    var db = req.db;
    var materias = db.get('materias');

    var obj = {};

    var nameMateria = req.body.ismateria;
    obj[nameMateria] = null;
    obj['name'] = req.body.ismateria;
    obj['idmateria'] = req.body.idmateria;


    materias.insert(obj, function(err, doc) {
        if (err) {
            return err;
        } else {

            res.redirect('/admateries-code-gofjg');

        }
    });


});


router.get('/json', function(req, res, next) {

    var db = req.db;
    var materias = db.get('materias');

    materias.find({}, function(err, indet) {
        if (err) return err;

        indet.sort(function(a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;

            return 0
        });



        res.json(indet);
    });

});


router.post('/delete', function(req, res, next) {

    var db = req.db;
    var materias = db.get('materias');

    materias.remove({ _id: req.body.id }, function(err, resultShow) {
        if (err) return err;

        res.json({ result: true });

    });


});

module.exports = router;
