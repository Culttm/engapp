var mysql = require('mysql');
var db = require('./db');

var db_config = {
    host     : db.host,
    user     : db.user,
    password : db.password,
    database : db.database
};



var connection;


function handleDisconnect() {
    connection = mysql.createConnection(db_config);

    connection.connect(function(err) {
        if(err) {
            // console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000);
        } else {
            // console.log("connected to " + JSON.stringify(db_config));
            exports.connection = connection;
        }
    });

    connection.on('error', function(err) {
        // console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST' || err.code === 'ECONNREFUSED') {
            handleDisconnect();
        } else {
            throw err;
        }
    });
}

handleDisconnect();


exports.connection = connection;