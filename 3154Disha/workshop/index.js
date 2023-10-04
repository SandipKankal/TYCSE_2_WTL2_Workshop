const http = require("http");
const fs = require('fs').promises;

const requestListener = function (req, res) {
    fs.readFile(__dirname + "./index.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(err => {
            res.writeHead(500);
            res.end(err);
            return;
        });
};

http.createServer(requestListener).listen(8080)
console.log('server started')