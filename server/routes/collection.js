var express = require('express');
var router = express.Router();
var mysql = require('../mysql/mysql');



router.get('/api/collection/:id', function (req, res, next) {

	try{
	    mysql.connection.query("SELECT * FROM collections c LEFT JOIN cards s ON s.collections_id = c.id WHERE c.id = "+req.params.id+";", [], function(err, rows, fields){
			res.json({
	            data: rows
			});
	    });

	}catch (err) {
		next(err);
	}


});

module.exports = router;