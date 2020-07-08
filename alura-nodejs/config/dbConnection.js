var mysql = require('mysql');

var dbConnection = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '1234',
		database : 'alura'
	});
}

module.exports = ()=>{
    return dbConnection;
}