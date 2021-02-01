const Gpio = require('pigpio').Gpio;
const sleep = require('sleep');
const motorA1 = new Gpio(5, {mode: Gpio.OUTPUT});
const motorA2 = new Gpio(6, {mode: Gpio.OUTPUT});
const motorAP = new Gpio(12, {mode: Gpio.OUTPUT});

let dutyCycle = 0;

motorAP.digitalWrite(1);

console.log('CW...');

motorA1.digitalWrite(1);
motorA2.digitalWrite(0);

for(dutyCycle=0;dutyCycle<256;dutyCycle += 10){
	motorAP.pwmWrite(dutyCycle);
	sleep.msleep(200);
}

motorA1.digitalWrite(0);
motorA2.digitalWrite(0);