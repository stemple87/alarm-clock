var helloWorld = require('./hello.js').helloWorld;
var alert = require('alert');
alert.start();

console.log("Just saying hello!");
alert.get(helloWorld());
// result.forEach(function(element) {
//   console.log(element);
// });
