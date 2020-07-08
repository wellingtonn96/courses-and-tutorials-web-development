let mysql = require('mysql');

const dbConnection = function(){
    return mysql.createConnection({
        host : 'localhost',
		user : 'root',
		password : '1234',  
		database : 'hcode'
    })
}

module.exports = () => dbConnection