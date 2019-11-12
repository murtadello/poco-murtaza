let request = require('request');

function getTemperature(station) {
  request(`http://fabio.ch:3000/${station}`, (error, response, body) => {
    if (error) {
      console.error(error);
    } else {
      let weather = JSON.parse(body);
      console.log(`Temperature at ${weather.station}: ${weather.temperature} °C`);
    }
  });
}

getTemperature('BAS'); // Basel
getTemperature('GVE');
getTemperature('SMA');
getTemperature('BER'); //BERN

