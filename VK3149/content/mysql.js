var mysql = require('mysql')
var dbconn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'11111',
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
const http=require('http')
const books=JSON.stringify([
    {title:"The Alchamist",author:"paulo",year:1988},
    {title:"the prophet",author:"kahil",year:1923}
]);

const authors=JSON.stringify([
    {title:"The harry potter",birth:"brazil",year:1998},
    {title:"kahil",birth:"lebanon",year:1903}
]);

http.createServer(function(req,res){
    res.setHeader("Content-Type","application/json");
    switch(req.url){
        case "/books":
        res.writeHead(200);
        res.end(books);
        break;
        case "/authors":
        res.writeHead(200);
        res.end(authors);
        break;
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"resource not found"}))
    }
}).listen(8080)
console.log('server started')