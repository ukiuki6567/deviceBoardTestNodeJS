const Gpio = require('pigpio').Gpio;

const red = new Gpio(17, {mode: Gpio.OUTPUT});
const green = new Gpio(27, {mode: Gpio.OUTPUT});
const blue = new Gpio(22, {mode: Gpio.OUTPUT});

function msleep(n){
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}
function sleep(n){
    msleep(n*1000);
}

red.digitalWrite(1);
green.digitalWrite(1);
blue.digitalWrite(1);

while(true){
    blue.digitalWrite(0);
    red.digitalWrite(0);
    
    sleep(1);
    
    blue.digitalWrite(1);
    red.digitalWrite(1);

    sleep(1);
}
