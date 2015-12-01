var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', req.headers.origin);
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
};

app.use(allowCrossDomain);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'static')));




// Define routes
var useRoutes = {
	collections      : require('./routes/collections'),
	collection  	 : require('./routes/collection'),	
	removeCollection : require('./routes/removeCollection'),
	removeCard 	 	 : require('./routes/removeCard')
};

// App Routes Use
app.get('/api/collections', useRoutes.collections);
app.get('/api/collection/:id', useRoutes.collection);
app.post('/api/removeCollection', useRoutes.removeCollection);
app.post('/api/removeCard', useRoutes.removeCard);






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;