var mysql = require('mysql');
var dbconn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'DS433',
    database: 'login'
});

dbconn.connect(function (err) {
    if (err) {
        console.log('Database connection error');
    } else {
        console.log('Database connection successful');
    }
});

//Select all customers and return the result object:
dbconn.query("SELECT * FROM login", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    //console.log('field length:',fie)
    result.forEach((row) => {
        console.log(`${row.name} : ${row.mail}`);
    });
});
