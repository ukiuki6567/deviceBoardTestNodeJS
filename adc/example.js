const mcpadc = require('mcp-spi-adc');

const illumSensor = mcpadc.open(1, err => {
  if (err) {
    throw err;
  }

  setInterval(_ => {
    illumSensor.read((err, reading) => {
      if (err) {
        throw err;
      }

      console.log(reading.value * 1024);
    });
  }, 1000);
});

