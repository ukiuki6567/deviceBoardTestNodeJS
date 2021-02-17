const Gpio = require('pigpio').Gpio;

const buzzer = new Gpio(18, {mode: Gpio.OUTPUT});
const freq = [523, 587,659, 698, 784, 880,  988, 1046];

function msleep(n){
	Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}
function sleep(n){
	msleep(n*1000);
}

for(let i=0;i<freq.length;i++){
	buzzer.hardwarePwmWrite(freq[i], 500000);
	sleep(1);
}
buzzer.pwmWrite(0);
