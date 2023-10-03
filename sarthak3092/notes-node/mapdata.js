const request = require('request');

request({
  url:'https://api.coindesk.com/v1/bpi/currentprice.json',
  json: true
}, (error, response,body) => {
    console.log(JSON.stringify(body))
    //console.log(response.statusCode)
  console.log(`Address: ${body.bpi.GBP.rate}`);
//   console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
//   console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
