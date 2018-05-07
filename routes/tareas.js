'use strict'

var express = require('express');
var router = express.Router();

var tareas = require('../models/tareas');
var newtarea = require('../models/newtarea');
var viewtarea = require('../models/viewtarea');
var respuestas = require('../models/respuestas');


router.get('/', (req, res, next) => {

	tareas(req,res,next);

});

router.post('/save/newtarea', (req, res, next) => {

	newtarea(req, res, next);

});

router.get('/view/:id', (req, res, next) => {

	viewtarea(req, res, next, req.params.id);

});

router.post('/save/respuesta', (req, res, next) => {

	respuestas(req, res, next);

});


module.exports = router;