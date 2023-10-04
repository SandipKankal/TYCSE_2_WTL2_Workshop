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

/*dbconn.query(
    "UPDATE login SET password='12345' WHERE username='ds'", function (err, res) {
        if (err) {
            console.log(err)
        }

        else {
            console.log('Record updated')
        }
    })
*/

dbconn.query('DELETE FROM login WHERE password="password"', function (err, res) {
    if (err) {
        console.log(err)
    }

    else {
        console.log('Record deleted')
    }
});


