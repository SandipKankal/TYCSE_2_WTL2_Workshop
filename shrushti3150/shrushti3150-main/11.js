var http=require('http')
http.createServer(function(req,res)
{
    res.write("<h1>Welcome from node</h1>")
    res.end()
}).listen(8080);
console.log('server started')



