"use strict"

var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {

    var db = req.db;
    var user = db.get('users');

    user.find({ _id: req.user.id }, { limit: 6 }, function(err, profileResult) {
        if (err) return err;

        res.render('profile', {
            title: 'Mi Perfil - Aprendidos',
            user: req.user,
            profile: profileResult.reverse(),
            menuNav: 'profile',
            menuOther: 'profile'
        });

    });

});

router.get('/changepassword', (req, res, next) => {

    var db = req.db;
    var user = db.get('users');

    user.find({ _id: req.user.id }, { limit: 5 }, function(err, profileResult) {
        if (err) return err;

        res.render('profilechangepassword', {
            title: 'Mi Perfil - Aprendidos',
            user: req.user,
            profile: profileResult.reverse(),
            menuNav: 'password'
        });

    });

});



module.exports = router;
