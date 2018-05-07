"use strict"

var mongoose = require('mongoose');

var User = mongoose.model('User');

var Local = mongoose.model('userLocal');

var TwitterStrategy = require('passport-twitter').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

var local = require('passport-local').Strategy;

module.exports = function(passport) {


	passport.serializeUser(function(user, done) {
		done(null, user._id);
	});

	passport.deserializeUser(function(id, done){
		User.findById(id, (err, user) => {
			done(err, user);
		});
	});

	//Config Twitter
	passport.use(new TwitterStrategy({
		consumerKey      : "Insert Key",
        consumerSecret  : "Insert Secret",
        callbackURL      : '/auth/twitter/callback',
        includeEmail: true
	}, function(accessToken, refreshToken, profile, done){

		User.findOne({provider_id: profile.id}, function(err, user){
			if(err) throw(err);
            // Si existe en la Base de Datos, lo devuelve
            if(!err && user!= null) return done(null, user);

            
            var fotoHDTwitter = profile._json.profile_image_url;
            var fotoHDTwitter__Replace = fotoHDTwitter.replace('_normal', '');


            // Si no existe crea un nuevo objecto usuario
            var user = new User({
                provider_id : profile.id,
                provider: profile.provider,
                token: accessToken,
                name: profile.displayName,
                username: profile.username,
                /*photo: profile.photos[0].value,*/
                photo: fotoHDTwitter__Replace,
                random: Math.random(),
                email: '',
                genero: '',
                edad: ''
            });
            //...y lo almacena en la base de datos
            user.save(function(err) {
                if(err) throw err;
                done(null, user);
            });
		});

	}));

	//Config Facebook
	passport.use(new FacebookStrategy({
		clientID : "Insert Id",
        clientSecret: "Insert Secret",
        callbackURL : 'https://aprendidos.com/auth/facebook/callback',
        profileFields : ['id', 'displayName',/*'provider',*/ 'picture.type(large)', 'email']
	}, function(accessToken, refreshToken, profile, done){

        var verifyEmail = '';

        if(profile.emails) {

            verifyEmail = profile.emails[0].value;
        
        } else {
            
            verifyEmail = 'alumnos@aprendidos.com';

        }


		User.findOne({provider_id: profile.id}, function(err, user) {
            if(err) throw(err);
            if(!err && user!= null) return done(null, user);

            // Al igual que antes, si el usuario ya existe lo devuelve
            // y si no, lo crea y salva en la base de datos
            var user = new User({
                provider_id: profile.id,
                provider: profile.provider,
                token: accessToken,
                name: profile.displayName,
                photo: profile.photos[0].value,
                email: verifyEmail,
                random: Math.random(),
                genero: '',
                edad: ''
                           
            });
        
            user.save(function(err) {
                if(err) throw err;
                done(null, user);
            });
        
        });

	}));

    passport.use(new local({
        usernameField: 'email',
        passwordField: 'password'
    }, (username, password, done) => {
       
       

        process.nextTick(() => {
            Local.findOne({
                'email': username,
                'password': password
            }, (err, user) => {


                if(err) {
                    return done(err)
                }
                if(!user) {
                    return done(null, false);
                }
                if(user.password != password) {
                    return done(null, false);
                }
                return done(null, user);
            });
        });

    }));

}

