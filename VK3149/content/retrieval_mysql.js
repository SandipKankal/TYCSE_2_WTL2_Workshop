var mysql  = require('mysql');
var dbconn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '11111',
  database : 'mydb'
});
 
dbconn.connect(function(err){
  if(err){
    console.log('Database connection error');
  }else{
    console.log('Database connection successful');
  }
});

var record= { name: 'Rahul', mail: 'kumar@gmail.com', pass: 'abc123' };

dbconn.query('INSERT INTO xyz SET ?', record, function(err,res){
  if(err) throw err;
  else
  console.log('record inserted successfully')

  
});