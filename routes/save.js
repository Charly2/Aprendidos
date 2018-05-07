"use strict"

var express = require('express');
var router = express.Router();

var step1 = require('../models/step1');
var step2 = require('../models/step2');
var step3 = require('../models/step3');
var step4 = require('../models/step4');

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var bodyParser = require('body-parser');

router.post('/teacher/1', function(req, res, next){
	step1(req, res, next);
});

router.post('/teacher/2', function(req, res, next){
	step2(req, res, next);
});
router.post('/teacher/3', function(req, res, next){
	step3(req, res, next);
});

router.post('/teacher/4', function(req, res, next){
	step4(req, res, next);
});


//Actualizamos los perfiles de usuarios
var update1 = require('../models/update1');
var update2 = require('../models/update2');
var update3 = require('../models/update3');
var update4 = require('../models/update4');

router.post('/teacher/update1', function(req, res, next){
	update1(req, res, next);
});

router.post('/teacher/update2', function(req, res, next){
	update2(req, res, next);
});

router.post('/teacher/update3', function(req, res, next){
	update3(req, res, next);
});

router.post('/teacher/update4', function(req, res, next){
	update4(req, res, next);
});

//Review
var review = require('../models/reviewsave');
var removereview = require('../models/removereview');

//Like
var like = require('../models/like');
var removelike = require('../models/removelike');

router.post('/teacher/review', function(req, res, next){
	review(req, res, next);
});

router.post('/teacher/removereview', function(req, res, next){
	removereview(req, res, next);
});

router.post('/teacher/like', function(req, res, next){
	like(req, res, next);
});

router.post('/teacher/removelike', function(req, res, next){
	removelike(req, res, next);
});


// New user register
var newaccount = require('../models/newaccount');

router.post('/teacher/newuser', function(req, res, next){
	newaccount(req, res, next);
});


//save profile continue teacher local register
var updatelocal = require('../models/updatelocal');

router.post('/teacher/updatefinish', multipartMiddleware, function(req, res, next){

	updatelocal(req, res, next);

});

//save profile login in twitter
var updatetwitter = require('../models/updatetwitter');

router.post('/teacher/updatetwitter', function(req, res, next){

    updatetwitter(req, res, next);

});

//save photo on profile

var savephotoprofile = require('../models/photoprofile');

router.post('/teacher/userphoto', multipartMiddleware, function(req, res, next){

	savephotoprofile(req, res, next);

});

//save profile complet user
var saveprofilecomplet = require('../models/saveprofilecomplet');

router.post('/teacher/saveprofilecomplet', function(req, res, next){

		saveprofilecomplet(req, res, next);

});


//save visited profile
var visitedprofilesave = require('../models/visitedprofilesave');

router.post('/teacher/visited', function(req, res, next){

	visitedprofilesave(req, res, next);

});


//save reset password to email link
var resetpasswordsave = require('../models/resetpasswordsave');

router.post('/teacher/resetpasswordsave', function(req, res, next){

	resetpasswordsave(req, res, next);

});

//save contact send email to click visited
var emailcontactvisited = require('../models/contactvisited');

router.post('/teacher/visitedcontact', function(req, res, next) {


	emailcontactvisited(req, res, next);

});


module.exports = router;