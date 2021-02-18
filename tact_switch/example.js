const Gpio = require('pigpio').Gpio;

const button = new Gpio(20, {
    mode: Gpio.INPUT
});

while(true){
    console.log(button.digitalRead());
}
