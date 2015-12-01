var express = require('express');
var router = express.Router();
var mysql = require('../mysql/mysql');



router.use('/api/removeCollection', function (req, res, next) {

	if(req.body.id){
		try{
		    mysql.connection.query("DELETE FROM `cards` WHERE collections_id = ?", req.body.id , function(err, rows, fields){
				res.send("DELETE FROM `collections` c WHERE c.id = " + req.body.id + ";");
		    });
		    
		}catch (err) {
			next(err);
		}
	}else{
		res.send('not id')
	}


});

module.exports = router;