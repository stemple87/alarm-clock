require('./../js/alarm.js').alarmTime;
var getFormattedTime = require('./../js/timeformat.js').getFormattedTime;



$(document).ready(function(){
  $("#alarmTime").submit(function(event){
    event.preventDefault();
    var alarmTime = $('#alarm').val();
    console.log(alarmTime);
    var formattedTime = getFormattedTime(alarmTime);
    $("#alarm-hide").show();
    $("#display-alarm").text(formattedTime);
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

var getFormattedTime = require('./../js/timeformat.js').getFormattedTime;

$(document).ready(function(){
  var newTime = moment().format("HH:mm");
  var theTime = getFormattedTime(newTime);
  $('#time').text(theTime);
});
