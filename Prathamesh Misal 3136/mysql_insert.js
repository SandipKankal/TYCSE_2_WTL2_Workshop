var mysql = require('mysql');
var dbconn=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'PYM@123$',
    database:'mydb'
})
dbconn.connect(function(err){
    if(err){
        console.log("database connection failed");
    }
    else{
        console.log('connection successful');

    }
});

// var record = {uid:102 , name: 'Rahul'};

// dbconn.query('INSERT INTO user1 SET ?',record,function(err,res){
//     if(err) throw err;
//     else
//     console.log('record inserted succcesfully');
// });

// dbconn.query("SELECT * FROM user1", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//     //console.log('field length:',fie)
//     result.forEach( (row) => {
//         console.log(`${row.uid} : ${row.name}`);
//       });
     
//   });

dbconn.query("DELETE FROM user1 WHERE id=102", function (err, result) {
    if (err) {
        console.error("Error deleting record:", err); // Log the error message
    } else {
        console.log(`Record deleted successfully`);
    }
});
