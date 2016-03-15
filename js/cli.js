var helloWorld = require('./hello.js').helloWorld;

console.log("Just saying hello!");
var result = helloWorld();
result.forEach(function(element) {
  console.log(element);
});
