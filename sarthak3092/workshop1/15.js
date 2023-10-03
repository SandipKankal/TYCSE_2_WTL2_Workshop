


var http = require('http');
http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('Hello World!');
//   res.end();
//res.setHeader("Content-Type", "application/json");
    // res.setHeader("Content-Type", "text/csv");
    // res.setHeader("Content-Disposition",      
    //                       "attachment;filename=oceanpals.csv")
    // res.end(`{"message": "This is a JSON response"}`);


}).listen(8080);
console.log('app running')