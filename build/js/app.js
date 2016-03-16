(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.alarmClock = function() {
  alert("Wake Up!");
};

},{}],2:[function(require,module,exports){
exports.getFormattedTime = function (fourDigitTime) {
    var hours24 = parseInt(fourDigitTime.substring(0, 2),10);
    var hours = ((hours24 + 11) % 12) + 1;
    var amPm = hours24 > 11 ? 'PM' : 'AM';
    var minutes = fourDigitTime.substring(2);

    return hours + minutes + " " + amPm;
};

},{}],3:[function(require,module,exports){
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

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

var getFormattedTime = require('./../js/timeformat.js').getFormattedTime;

// $(document).ready(function(){
//   var newTime = moment().format("HH:mm");
//   var theTime = getFormattedTime(newTime);
//   $('#time').text(theTime);
// });

var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date());
    datetime.html(date.format('h:mm:ss A'));
};

$(document).ready(function(){
    datetime = $('#time');
    update();
    setInterval(update, 1000);
});

},{"./../js/alarm.js":1,"./../js/timeformat.js":2}]},{},[3]);
