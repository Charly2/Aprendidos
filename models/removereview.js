"use strict"

module.exports = (req, res, next) => {

    var db = req.db;
    var user = db.get('users');

    var idremove = req.body.remove;

    user.findOneAndUpdate({_id: req.user.id}, {
		$set: {
			mycalification: false
		}
	}, function(err, result){
		//console.log('funciono');
	});

    user.update({ _id: req.body.id }, {
        $pull: {
            dejecomentarios: {
                id: req.body.remove
            }
        }
    });

     user.update({ _id: req.body.id }, {
        $pull: {
        	calificacion: {
        		id: req.body.remove
        	}
        }
    }, function(err, result) {
        try {
            
            res.json({ 'remove': true });

        } catch (err) {
            return err;
        }

    });


}
