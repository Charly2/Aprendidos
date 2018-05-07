"use strict"
var bodyParser = require('body-parser');

module.exports = (req, res, next) => {

    var db = req.db;
    var user = db.get('users');

    
    var arr = [];

    var materiasData = req.body.clases;
    
    if(materiasData.length) {

        user.findOneAndUpdate({ _id: req.user.id }, {
            $set: {

                'materias.0.clases': materiasData,
                'materias.0.status': req.body.lvlstude

            }
        }, function(err, inData){
            res.redirect('/teacher/register/steptree');
        });

    } else {

        for(var all in materiasData){
            arr.push(materiasData[all]);
         }




        user.findOneAndUpdate({ _id: req.user.id }, {
            $set: {

                'materias.0.clases': arr,
                'materias.0.status': req.body.lvlstude

            }
        }, function(err, inData){
        	res.redirect('/teacher/register/steptree');
        });

    }

   

    /*user.update({ _id: req.user._id }, {
        $unset: {
            'materias': ''
        }
    });*/


    /*user.findOneAndUpdate({ _id: req.user._id }, {
        $push: {
            materias: {
    			'clases': req.body.clases,
    			'status': req.body.lvlstude
    		}

        }
    }, function(err, data) {

        res.redirect('/teacher/register/steptree');

    });*/


}
