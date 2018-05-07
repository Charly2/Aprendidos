"use strict"

var shortid = require('shortid');

const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

module.exports = (req, res, next) => {

    var db = req.db;
    var usuario = db.get('users');


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


    


    if (req.user.mycalification == true) {

        res.redirect('/search/' + 0);

    } else {

    		var urlProfileTeacher = "https://aprendidos.com/teacher/" + req.body.idreview;

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
		    strVar += "                <h1 style=\"font-size:20px;margin:16px 0;color:#333;text-align:center\"> Calificaciónes<\/h1>";
		    strVar += "                <p style=\"font:15px\/1.25em 'Helvetica Neue',Arial,Helvetica;color:#333;text-align:center\"> Un usuario calificó tu perfi, ingresa para poder verlo. <\/p>";
		    strVar += "                <div style=\"background:#f6f7f8;border-radius:3px\"><br\/>";
		    strVar += "                  <p style=\"font:15px\/1.25em 'Helvetica Neue',Arial,Helvetica;margin-bottom:0;text-align:center\"><a href="+urlProfileTeacher+" style=\"border-radius:3px;background:#ff5848;color:#fff;display:block;font-weight:700;font-size:16px;line-height:1.25em;margin:24px auto 6px;padding:10px 18px;text-decoration:none;width:180px\" target=\"_blank\"> INGRESAR<\/a><\/p><br\/><br\/>";
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



        usuario.findOneAndUpdate({ _id: req.user.id }, {
            $set: {
                mycalification: true
            }
        }, function(err, result) {
            //console.log('funciono');
        });


        let mailOptions = {
            from: 'info@aprendidos.com',
            to: req.body.emailSend, // list of receivers
            subject: 'Aprendidos.com | Un usuario te calificó', // Subject line
            //text: 'hola aprendidos', // plaintext body
            html: strVar // html body
        }



        usuario.findOneAndUpdate({ _id: req.body.idreview }, {
            $push: {
                calificacion: {
                    'id': shortid.generate(),
                    'idTeacher': req.body.idreview,
                    'idReview': req.user.id,
                    'fotoReview': req.user.photo,
                    'nombreReview': req.user.name,
                    'usernameReview:': req.user.username,
                    'calificacion': req.body.calificacion,
                    'calificacionCant': req.body.calificacionCant,
                    'calificacionResult': req.body.resultcalifi,
                    'mensaje': req.body.mensajecalificacion,
                    'date': new Date()
                }
            }
        }, function(err, result) {

            if (err) return err;

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    return console.log(error)
                } else {

                }
            });

            res.redirect('/teacher/' + result._id + '#profile?name=' + result.teacher[0].nombreTeacher);

        });
    }

}
