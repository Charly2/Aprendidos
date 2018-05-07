"use strict"

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

    user.find({ 'email': req.body.email }, function(err, resultEmail) {



        if (req.body.type == 'facebook') {

            //Verificamos si la contraseña son iguales

            if (req.body.password == req.body.confirmpassword) {

                if (req.body.email) {

                    let mailOptions = {
                        from: 'info@aprendidos.com',
                        to: req.body.email, // list of receivers
                        subject: 'Aprendidos.com | Bienvenidos', // Subject line
                        //text: 'hola aprendidos', // plaintext body
                        html: strVar // html body
                    }

                    user.findOneAndUpdate({ _id: req.body.id }, {
                        $set: {
                            'edad': req.body.fecha,
                            'genero': req.body.genero,
                            'email': req.body.email,
                            'password': req.body.password
                        }
                    }, (err, success) => {
                        if (err) return err;


                        transporter.sendMail(mailOptions, function(error, info) {
                            if (error) {
                                return console.log(error)
                            } else {
                               
                            }
                        });


                        req.flash('info', 'Su perfil se actualizo correctamente');
                        res.redirect('/profile');
                    });

                } else {

                    let mailOptions = {
                        from: 'info@aprendidos.com',
                        to: req.body.email, // list of receivers
                        subject: 'Aprendidos.com | Bienvenidos', // Subject line
                        //text: 'hola aprendidos', // plaintext body
                        html: strVar // html body
                    }


                    user.findOneAndUpdate({ _id: req.body.id }, {
                        $set: {
                            'edad': req.body.fecha,
                            'genero': req.body.genero,
                            'password': req.body.password
                        }
                    }, (err, success) => {
                        if (err) return err;


                        transporter.sendMail(mailOptions, function(error, info) {
                            if (error) {
                                return console.log(error)
                            } else {
                               
                            }
                        });


                        req.flash('info', 'Su perfil se actualizo correctamente');
                        res.redirect('/profile');
                    });
                }

            } else {

                req.flash('info', 'Se produjo un error la contraseña ingresada no coinciden');
                res.redirect('/profile');

            }



        } else {

            if (resultEmail.length) {

                req.flash('info', 'Se produjo un error el email: ' + req.body.email + ' ya existe en nuestra base de datos');
                res.redirect('/profile');

            } else {

                //Verificamos si la contraseña son iguales

                if (req.body.password == req.body.confirmpassword) {

                    let mailOptions = {
                        from: 'info@aprendidos.com',
                        to: req.body.email, // list of receivers
                        subject: 'Aprendidos.com | Bienvenidos', // Subject line
                        //text: 'hola aprendidos', // plaintext body
                        html: strVar // html body
                    }

                    user.findOneAndUpdate({ _id: req.body.id }, {
                        $set: {
                            'email': req.body.email,
                            'edad': req.body.fecha,
                            'genero': req.body.genero,
                            'password': req.body.password
                        }
                    }, (err, success) => {
                        if (err) return err;

                        transporter.sendMail(mailOptions, function(error, info) {
                            if (error) {
                                return console.log(error)
                            } else {
                               
                            }
                        });

                        req.flash('info', 'Su perfil se actualizo correctamente');
                        res.redirect('/profile');
                    });


                } else {

                    req.flash('info', 'Se produjo un error la contraseña ingresada no coinciden');
                    res.redirect('/profile');

                }


            }

        }


    });


}
