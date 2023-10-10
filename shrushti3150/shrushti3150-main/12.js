var mysql=require('mysql')
const dbconn = mysql.createConnection
    (
    {
        host:'localhost',
        user:'root',
        password:'mynewpass',
        database:'mydb'
    })
dbconn.connect(function(err)
{
    if(err)
    {
        console.log('database connection failed')
    }
    else{
        console.log('connection successful')
    }
})
var record={name:'Vipin', email:'vipin@gmail.com', password:'vipin123'}
dbconn.query('INSERT INTO amisha SET ?', record,function(err,res)
{
    if(err)
    {
        console.log(err)
    }
    else{
console.log('record added')
    }
})