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
