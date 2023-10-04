const request = require('request');

const options = {
    url: 'https://reqres.in/api/users/1',
    method: 'GET'
};

request(options, (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    console.log(JSON.parse(body));
});
//npm install request