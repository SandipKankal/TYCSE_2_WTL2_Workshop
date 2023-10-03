const request = require('request');

request.delete('https://reqres.in/api/users/1', (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    console.log('Status Code:', res.statusCode);
});

