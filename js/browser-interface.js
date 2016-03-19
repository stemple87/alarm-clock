var alarmClock =
require('./../js/alarm.js').alarmClock;
var getFormattedTime = require('./../js/timeformat.js').getFormattedTime;
$(document).ready(function(){
  $("#alarmTime").submit(function(event){
    event.preventDefault();
    var alarmTime = $('#alarm').val();
    var formattedTime = getFormattedTime(alarmTime);
    $("#alarm-hide").show();
    $("#display-alarm").text(formattedTime);
    var charArray = alarmTime.split("");
    var atLocation3 = String(charArray[3]);
    var atLocation4 = String(charArray[4]);
    var alarmMinutes = atLocation3 + atLocation4;
    alarmMinutes = parseInt(alarmMinutes);
    var atLocation0 =  String(charArray[0]);
    var atLocation1 = String(charArray[1]);
    var alarmHours = atLocation0 + atLocation1;
    alarmHours = parseInt(alarmHours);
    var checkInterval = function(alarmMinutes, alarmHours) {
      var currentMinutes = parseInt(moment().format("mm"));
      var currentHours = parseInt(moment().format("HH"));
      if ((alarmMinutes === currentMinutes) && (alarmHours === currentHours)) {
        alert("Wake Up!");
        clearInterval(secondsCounter);
      }
    };
    var secondsCounter = setInterval(function(){
      checkInterval(alarmMinutes, alarmHours)
    }, 1000);
  });
});
