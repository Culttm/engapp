var express = require('express');
var router = express.Router();
var mysql = require('../mysql/mysql');



router.use('/api/removeCard', function (req, res, next) {

	var id = req.body.id;

	if(req.body.id){
		try{
		    mysql.connection.query("DELETE FROM `cards` WHERE id = ?", id , function(err, rows, fields){
				res.send("Card #" + id + " was removed!");
		    });
		    
		}catch (err) {
			next(err);
		}
	}else{
		res.send('not id')
	}


});

module.exports = router;