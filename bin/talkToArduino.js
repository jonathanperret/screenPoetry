var SerialPort = require('serialport');
require('dotenv').config();

//serial listener
function serialListener(userInput)
{
  var receivedData = "";
  serialPort = new SerialPort(process.env.ARDUINOPORTNAME, {
      baudrate: 9600,
      // defaults for Arduino serial communication
       dataBits: 8,
       parity: 'none',
       stopBits: 1,
       flowControl: false
  });

  serialPort.on("open", function () {
      console.log('open serial communication');
      serialPort.write(userInput);
      serialPort.close();
  });
}

module.exports = {serialListener};