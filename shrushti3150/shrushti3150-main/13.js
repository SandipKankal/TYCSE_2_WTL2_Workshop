var mysql = require('mysql')
var dbconn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'mynewpass',
    database:'mydb',
    //port:'3306'
});
dbconn.connect(function(err){
   if(err){
    console.log(err)
   }

   else {
    console.log('connection successful')
   } 
   
});