var helloWorld = require('./../js/hello.js').helloWorld;

 $(document).ready(function() {
  $('#hello').click(function(event) {
    event.preventDefault();
    helloWorld();
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
