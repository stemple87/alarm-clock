var helloWorld = require('./../js/hello.js').helloWorld;

 $(document).ready(function() {
  $('#hello').click(function(event) {
    event.preventDefault();
    helloWorld();
  });
});
