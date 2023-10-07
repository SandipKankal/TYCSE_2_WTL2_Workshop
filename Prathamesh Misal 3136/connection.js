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
})