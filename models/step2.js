"use strict"

module.exports = (req, res, next) => {

    var db = req.db;
    var user = db.get('users');


    var arr = [];

    var materiasData = req.body.clases;

    if(materiasData.length) {

        user.findOneAndUpdate({ _id: req.user.id }, {
            $push: {
                materias: {
                    'clases': materiasData,
                    'status': req.body.lvlstude

                }
            }
        }, function(err, data) {

            res.redirect('/teacher/register/steptree');

        });

    } else {

        for(var all in materiasData){
            arr.push(materiasData[all]);
         }

         user.findOneAndUpdate({ _id: req.user.id }, {
            $push: {
                materias: {
                    'clases': arr,
                    'status': req.body.lvlstude

                }
            }
        }, function(err, data) {

            res.redirect('/teacher/register/steptree');

        });


        
    }





    //console.log(req.body);

}
