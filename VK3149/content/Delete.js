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



dbconn.query('Delete from xyz where name="Rahul" ',  function(err,res){
  if(err) throw err;
  console.log('record deleted successfully')

  
});