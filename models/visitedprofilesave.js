"use strict";

module.exports = (req, res, next) => {

    var db = req.db;
    var user = db.get('users');

    if (req.user) {

        user.find({ _id: req.user.id, 'visitas.idTeacher': req.body.idteacher }, function(err, docResult) {

            console.log(docResult.length);

            if (docResult.length == 0) {

                user.findOneAndUpdate({ _id: req.user.id }, {
                    $push: {
                        'visitas': {
                            'idTeacher': req.body.idteacher,
                            'nameTeacher': req.body.nameteacher,
                            'imgTeacher': req.body.imgteacher
                        }
                    }
                }, (err, resultVisited) => {

                    console.log('success visited');

                });

            } else {

                user.update({_id: req.user.id, 'visitas.idTeacher': req.body.idteacher}, {
                    $set: {
                        'visitas.$.idTeacher': req.body.idteacher,
                        'visitas.$.nameTeacher': req.body.nameteacher,
                        'visitas.$.imgTeacher': req.body.imgteacher
                    }

                },function(err, result){
                    console.log(result);
                });
                /*user.findOneAndUpdate({_id: req.user._id, 'visitas.$.idTeacher': req.body.idteacher }, {
                    $set: {

                       'visitas.$': {
                        'nameTeacher': req.body.nameteacher,
                        'imgTeacher': req.body.imgteacher}

                    }
                }, (err, resultVisited) => {

                    console.log('success visited');
                    console.log(resultVisited);

                });*/

            }



            /*if (docResult.length) {
                res.end();
            } else {


                user.findOneAndUpdate({_id: req.user._id}, {
                    $push: {
                        'visitas': {
                            'idTeacher': req.body.idteacher,
                            'nameTeacher': req.body.nameteacher,
                            'imgTeacher': req.body.imgteacher
                        }
                    }
                }, (err, resultVisited) => {

                    console.log('success visited');

                });
            
            }*/

        });
    } else {
        res.end();
    }

}
