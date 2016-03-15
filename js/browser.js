var helloWorld = require('./hello.js').helloWorld;

 $(document).ready(function() {
  $('#hello').click(function(event) {
    event.preventDefault();
    helloWorld();
  });
});
