var alarmTime = require('./../js/alarm.js').alarmTime;

$(document).ready(function(event){

  $("#alarmTime").submit(function(){
    event.preventDefault;
    var alarmTime = $('#alarm').val();
    console.log(alarmTime);
    // alarmClock(alarmTime);
  });
});
