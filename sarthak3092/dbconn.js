var mysql  = require('mysql');
var dbconn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
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

dbconn.query('INSERT INTO user SET ?', record, function(err,res){
  if(err) throw err;
  else
  console.log('record inserted successfully')

  
});


  //Select all customers and return the result object:
  dbconn.query("SELECT * FROM user", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    //console.log('field length:',fie)
    result.forEach( (row) => {
        console.log(`${row.name} : ${row.mail}`);
      });
     
  });


