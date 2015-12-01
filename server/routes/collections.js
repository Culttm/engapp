var express = require('express');
var router = express.Router();
var mysql = require('../mysql/mysql');



router.get('/api/collections', function (req, res, next) {

	try{
	    mysql.connection.query("SELECT * FROM `collections`", [], function(err, rows, fields){
			res.json({
	            data: rows
			});
	    });
	    
	}catch (err) {
		next(err);
	}


});

module.exports = router;