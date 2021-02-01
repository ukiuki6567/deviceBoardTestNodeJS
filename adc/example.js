const mcpadc = require('mcp-spi-adc');

const tempSensor = mcpadc.open(0, err => {
  if (err) {
    throw err;
  }

  setInterval(_ => {
    tempSensor.read((err, reading) => {
      if (err) {
        throw err;
      }

      console.log(reading.value * 4095);
    });
  }, 1000);
});

