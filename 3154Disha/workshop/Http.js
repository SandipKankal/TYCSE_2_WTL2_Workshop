//on terminal - npm install http
var http = require('http')
http.createServer(function (req, res) {
    res.write("<h1>Welcom from node</h1>")
    res.end()
}).listen(8080);
console.log('Server started')