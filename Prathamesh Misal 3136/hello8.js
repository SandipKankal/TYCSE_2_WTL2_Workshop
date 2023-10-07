var http = require('http')
http.createServer(function(req,res){
    res.write("<h2> welcome to node </h2>")
    res.end()
}).listen(8080);
console.log("Server started");