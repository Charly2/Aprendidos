"use strict"

module.exports = (id, req, res, next) => {
    var db = req.db;
    var user = db.get('users');

    if (id.length >= 22) {


        if (req.user.mycalification == true) {

            res.redirect('/search/0');

        } else {

            user.find({ _id: id }, function(err, doc) {
                if (err) {
                    return err;
                } else {
                    verify(doc);
                }
            });

            function verify(data) {

                res.render('teacherreview', {
                    title: 'Profesor',
                    teacher: data,
                    user: req.user
                });
            }
        }




    } else {

        res.render('error', {
            title: 'Error Teacher'
        });
    }
}
