var express = require('express');
var flash = require('express-flash');

var app = express();
var path = require('path');

var favicon = require('serve-favicon');


//Import to database Mongodb
var mongodb = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/aprendidos');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');


//Json
var bodyParser = require('body-parser');

//Import passport
var passport = require('passport');
var expressSession = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;


//Import models users
require('./models/usuario');
require('./models/local');
require('./passport')(passport);





//Routes
var inicio = require('./routes/inicio');
var profile = require('./routes/profile');
var search = require('./routes/search');
var teacher = require('./routes/teacher');
var save = require('./routes/save');
var findregister = require('./routes/findregister');
var reset = require('./routes/reset');
var view = require('./routes/view');
var materias = require('./routes/materias');

var viewteachers = require('./routes/viewteachers');

var profilescreate = require('./routes/profilescreate');

//agregar cities
var cities = require('./routes/cities');

//view users register
var viewmail = require('./routes/viewmail');


//View Tareas
var tareas = require('./routes/tareas');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    next();
});

app.use(function(req, res, next) {
    req.db = db;
    next();
});

mongoose.connect('mongodb://localhost:27017/aprendidos', function(err, res) {
    if (err) throw err;
    console.log('MONGOOSE');
});

/*Cookies Login passport local*/
app.use(expressSession({
    secret: 'ilovescotchscotchyscotchscotch',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 3600000 // one hour in millis
    }
}));
/*End Cookies*/



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');






//Public stylesheet, javascript and images
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
app.use(favicon(__dirname + '/public/img/favicon.png'));

/*Activando passport*/
app.use(passport.initialize());
app.use(passport.session());

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/');
    }
}



app.use('/', inicio);
app.use('/profile', ensureAuthenticated, profile);
app.use('/search', search);
app.use('/teacher', teacher);

//Data save
app.use('/save', save);



//api register teacher
app.use('/findregister', findregister);


//Resetearemos cualquier dato
app.use('/reset', reset);


//Cities adding in to website
app.use('/adcities-codei-gofjg', cities);

//Adding materias
app.use('/admateries-code-gofjg', materias);

//View users register
app.use('/viewmailing-code-foxofsd', viewmail);

//View teacher register
app.use('/viewteacher-code-39f932491293', viewteachers);

//ver los perfiles de los usuarios
app.use('/view', view);

//ver todo los profiles creados
app.use('/profiles', profilescreate);


//Ver tareas publicadas
app.use('/tareas', tareas);


// Ruta para autenticarse con Facebook (enlace de login)
app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

app.get('/auth/twitter/callback', passport.authenticate('twitter', {
    successRedirect: '/profile',
    failureRedirect: '/register'
}));

app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/profile', failureRedirect: '/register' }));


app.post('/access', passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/notfound'
}));

app.get('/notfound', function(req, res, next) {
    req.flash('error', 'Los datos ingresados son incorrectos!');
    res.redirect('/login');
});


app.get('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/');
});




app.use(function(req, res, next) {
    res.status(404).render('404', { title: "Sorry, page not found" });
});



app.listen(3535, function() {
    console.log('Run server online: ' + 3535);
});
