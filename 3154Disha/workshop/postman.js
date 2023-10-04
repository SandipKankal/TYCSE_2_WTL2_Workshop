const http = require('http')
const books = JSON.stringify([
    { title: "The Alchamist", author: "Paulo", year: 1988 },
    { title: "The prophet", author: "Kahil", year: 1923 }
]);

const authors = JSON.stringify([
    { title: "The harry potter", birth: "Brazil", year: 1998 },
    { title: "Kahil", birth: "Lebanon", year: 1903 }
]);

http.createServer(function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
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
            res.end(JSON.stringify({ error: "Resource not found" }))
    }
}).listen(8080)
console.log('Server started')

/*
localhost:8080 - gives error
localhost:8080/books - gives books info
localhost:8080/authors - gives authors info
*/


