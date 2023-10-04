/*var mysql = require('mysql') //npm install mysql
var dbconn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'DS433',
    database: 'login',
    insecureAuth: true
    //port: 3306
});

dbconn.connect(function (err) {
    if (err) {
        console.log('Connection fail' + err.message)
    }
    else {
        console.log('connection successful')
    }
});*/

const mysql = require('mysql');

const dbconn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'DS433',
    database: 'login'
});

dbconn.connect(function (err) {
    if (err) {
        console.error('Database connection failed: ' + err.message);
    } else {
        console.log('Connection successful');
        // You can perform database operations here.
    }
});

var record = { username: 'root', password: 'DS433' }
dbconn.query('INSERT INTO login SET ?', record, function (err, res) {
    if (err) {
        console.log(err)
    }

    else {
        console.log('Record added')
    }
})