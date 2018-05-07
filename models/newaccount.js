"use strict"

var shortid = require('shortid');

const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');


module.exports = (req, res, next) => {

    var db = req.db;
    var user = db.get('users');


    //Conectamos primero al servidor email

    let transporter = nodemailer.createTransport(smtpTransport({

        host: "edinsoncs.com", // hostname
        secure: true, // use SSL
        port: 465, // port for secure SMTP
        auth: {
            user: 'carranza@edinsoncs.com',
            pass: '25edinson25'
        },
        tls: {
            rejectUnauthorized: false
        }

    }));


    //Template
    var strVar = "";
    strVar += "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" style=\"color:#333;background:#fff;padding:0;margin:0;width:100%;font:15px\/1.25em 'Helvetica Neue',Arial,Helvetica\">";
    strVar += "  <tbody>";
    strVar += "    <tr width=\"100%\">";
    strVar += "      <td valign=\"top\" align=\"left\" style=\"background:#eef0f1;font:15px\/1.25em 'Helvetica Neue',Arial,Helvetica\">";
    strVar += "        <table style=\"border:none;padding:0 18px;margin:50px auto;width:500px\">";
    strVar += "          <tbody>";
    strVar += "            <tr width=\"100%\" height=\"60\">";
    strVar += "              <td valign=\"top\" align=\"left\" style=\"border-top-left-radius:4px;border-top-right-radius:4px;background:#ff5848 url(https:\/\/ci5.googleusercontent.com\/proxy\/EX6LlCnBPhQ65bTTC5U1NL6rTNHBCnZ9p-zGZG5JBvcmB5SubDn_4qMuoJ-shd76zpYkmhtdzDgcSArG=s0-d-e1-ft#https:\/\/trello.com\/images\/gradient.png) bottom left repeat-x;padding:10px 18px;text-align:center\"><img height=\"auto\" width=\"125\" src=\"https:\/\/aprendidos.com\/img\/logo.png\" title=\"Aprendidos\" style=\"font-weight:bold;font-size:18px;color:#fff;vertical-align:top\" class=\"CToWUd\"\/><\/td>";
    strVar += "            <\/tr>";
    strVar += "            <tr width=\"100%\">";
    strVar += "              <td valign=\"top\" align=\"left\" style=\"background:#fff;padding:18px\">";
    strVar += "                <h1 style=\"font-size:20px;margin:16px 0;color:#333;text-align:center\"> Felicidades<\/h1>";
    strVar += "                <p style=\"font:15px\/1.25em 'Helvetica Neue',Arial,Helvetica;color:#333;text-align:center\"> Su cuenta fue creada exitosamente, ingrese a la comunidad de estudiantes y profesores. <\/p>";
    strVar += "                <div style=\"background:#f6f7f8;border-radius:3px\"><br\/>";
    strVar += "                  <p style=\"text-align:center\">Felicidades, su cuenta fue creada<\/p>";
    strVar += "                  <p style=\"font:15px\/1.25em 'Helvetica Neue',Arial,Helvetica;margin-bottom:0;text-align:center\"><a href=\"https:\/\/aprendidos.com\/login\" style=\"border-radius:3px;background:#ff5848;color:#fff;display:block;font-weight:700;font-size:16px;line-height:1.25em;margin:24px auto 6px;padding:10px 18px;text-decoration:none;width:180px\" target=\"_blank\"> INGRESAR<\/a><\/p><br\/><br\/>";
    strVar += "                <\/div>";
    strVar += "                <p style=\"font:14px\/1.25em 'Helvetica Neue',Arial,Helvetica;color:#333\"><strong>Que es aprendidos?<\/strong> Nuestra misión es conectar alumnos con profesores particulares teniendo en cuenta los requerimientos de cada usuario. Uno elige qué, cuándo, cómo y con quién...<a href=\"https:\/\/aprendidos.com\/nosotros\" style=\"color:#306f9c;text-decoration:none;font-weight:bold\" target=\"_blank\">Leer Más »<\/a><\/p>";
    strVar += "              <\/td>";
    strVar += "            <\/tr>";
    strVar += "          <\/tbody>";
    strVar += "        <\/table>";
    strVar += "      <\/td>";
    strVar += "    <\/tr>";
    strVar += "  <\/tbody>";
    strVar += "<\/table>";

    if (req.body.password == req.body.passwordconfirm) {

        user.find({ 'email': req.body.email }, function(err, showUsers) {

            if (showUsers.length) {
                req.flash('info', 'El email: ' + req.body.email + ' ya existe');
                res.redirect('/register');
            } else {



                let mailOptions = {
                    from: 'info@aprendidos.com',
                    to: req.body.email, // list of receivers
                    subject: 'Aprendidos.com | Bienvenidos', // Subject line
                    //text: 'hola aprendidos', // plaintext body
                    html: strVar // html body
                }


                user.insert({
                    'provider_id': shortid.generate(),
                    'provider': 'local',
                    'token': shortid.generate(),
                    'name': req.body.name,
                    'username': req.body.surname,
                    'password': req.body.password,
                    'email': req.body.email,
                    'photo': '',
                    'random': Math.random(),
                    'createdAt': new Date(),
                    'genero': 'Ninguno'
                }, function(err, showuser) {

                    transporter.sendMail(mailOptions, function(error, info) {
                        if (error) {
                            return console.log(error)
                        } else {

                        }
                    });

                    req.flash('info', 'Tu cuenta se creo exitosamente');
                    res.redirect('/login');
                });

            }


        });


    } else {

        req.flash('info', 'La contraseña no coiinciden');
        res.redirect('/register');
    }


}
