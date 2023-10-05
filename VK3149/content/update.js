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



dbconn.query('UPDATE xyz SET pass="pqr" WHERE name="vedshree"',  function(err,res){
  if(err) throw err;
  console.log('record updated successfully')

  
});