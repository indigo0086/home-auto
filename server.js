var Promise = require('bluebird');
var app = require('express')();
var jf = Promise.promisifyAll(require('jsonfile'));

var serverData =
{
  status: 'online',
  devices: {
    thermostat: {
      location: 'central',
      temperature: 76,
      units: 'C'
    },
    kitchenLights: true,
    bathroomLights: false,
    livingRoomLights: true
  }
};

//Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(require('body-parser').json());

app.get('/values', function(req, res) {
  res
    .set('Content-Type', 'application/json')
    .status(200)
    .send(serverData);
});

app.post('/values', function(req, res) {

});

app.listen(8088, function() {
  console.log('Starting server, listening on port 8088');
});
