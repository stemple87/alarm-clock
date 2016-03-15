var alarmTime = require('./../js/alarm.js').alarmTime;

$(document).ready(function(event){

  $("#alarmTime").submit(function(){
    event.preventDefault;
    var alarmTime = $('#alarm').val();
    console.log(alarmTime);
    // alarmClock(alarmTime);
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

$(document).ready(function(){
  $('#time').text(moment().format("HH:mm"));
});
