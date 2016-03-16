var alarmClock =
require('./../js/alarm.js').alarmClock;
var getFormattedTime = require('./../js/timeformat.js').getFormattedTime;



$(document).ready(function(){
  $("#alarmTime").submit(function(event){
    event.preventDefault();
    var alarmTime = $('#alarm').val();
    var formattedTime = getFormattedTime(alarmTime);
    // var newAlarmTime = new Date(alarmTime).getTime();
    // console.log(newAlarmTime);
    $("#alarm-hide").show();
    $("#display-alarm").text(formattedTime);


    // var ourAlarmTime = new Date(alarmTime).getTime()
    // var currentTime = new Date().getTime();
    // var timeDif = ourAlarmTime - currentTime;
    // console.log(timeDif);
    // setTimeout(alarmClock, timeDif);



    currentTime = moment().format("HH:mm");
    var currentCharArray = currentTime.split("");

    var atCurrentLocation3 =  String(currentCharArray[3]);
    var atCurrentLocation4 = String(currentCharArray[4]);
    var currentMinutes = atCurrentLocation3 + atCurrentLocation4;
    currentMinutes = parseInt(currentMinutes);
    console.log("currentMinutes = " + currentMinutes);

    var atCurrentLocation0 =  String(currentCharArray[0]);
    var atCurrentLocation1 = String(currentCharArray[1]);
    var currentHours = atCurrentLocation0 + atCurrentLocation1;
    currentHours = parseInt(currentHours);
    console.log("currentHours = " + currentHours);

    var charArray = alarmTime.split("");

    var atLocation3 = String(charArray[3]);
    var atLocation4 = String(charArray[4]);
    var alarmMinutes = atLocation3 + atLocation4;
    alarmMinutes = parseInt(alarmMinutes);
    console.log("alarmMinutes = " + alarmMinutes);


    var atLocation0 =  String(charArray[0]);
    var atLocation1 = String(charArray[1]);
    var alarmHours = atLocation0 + atLocation1;
    alarmHours = parseInt(alarmHours);
    console.log("alarmHours = " + alarmHours);


    var checkInterval = function(alarmMinutes, alarmHours) {
      console.log(alarmMinutes + " " + moment().format("mm"));
      console.log(alarmHours + " " + moment().format("HH"));
      var currentMinutes = parseInt(moment().format("mm"));
      var currentHours = parseInt(moment().format("HH"));
      if ((alarmMinutes === currentMinutes) && (alarmHours === currentHours)) {
        alert("Wake Up!");
        clearInterval(secondsCounter);
        // alarmClock();
      }
    };
    var secondsCounter = setInterval(function(){
      checkInterval(alarmMinutes, alarmHours)
    }, 1000);
  });
});
