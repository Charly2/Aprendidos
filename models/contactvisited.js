'use strict'

const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

module.exports = (req, res, next) => {

	console.log('hola');


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
    strVar += "                <h1 style=\"font-size:20px;margin:16px 0;color:#333;text-align:center\"> Alguien se interesó en tu Perfil <\/h1>";
    strVar += "                <p style=\"font:15px\/1.25em 'Helvetica Neue',Arial,Helvetica;color:#333;text-align:center\"> Hola "+req.body.name+", ¡quieren comunicarse con vos! El alumno "+req.user.name+" visitó tu perfil y quiere contactarte. Ya le brindamos tu teléfono. Podés visitar su Perfil y te dejamos su mail "+req.user.email+" Que tengas un buen día, el equipo de Aprendidos. <\/p>";
    strVar += "                <div style=\"background:#f6f7f8;border-radius:3px\"><br\/>";
    strVar += "                  <p style=\"font:15px\/1.25em 'Helvetica Neue',Arial,Helvetica;margin-bottom:0;text-align:center\"><a href='https://aprendidos.com/view/"+req.user._id+"' style=\"border-radius:3px;background:#ff5848;color:#fff;display:block;font-weight:700;font-size:16px;line-height:1.25em;margin:24px auto 6px;padding:10px 18px;text-decoration:none;width:180px\" target=\"_blank\"> VER ALUMNO <\/a><\/p><br\/><br\/>";
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


    let mailOptions = {
        from: 'info@aprendidos.com',
        to: req.body.emailsend, // list of receivers
        subject: 'Aprendidos.com | Alguien esta interesado en tu perfil', // Subject line
        //text: 'hola aprendidos', // plaintext body
        html: strVar // html body
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error)
        } else {
           console.log('se contacto');
        }
    });


    console.log('hola');

}
