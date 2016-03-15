(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.alarmClock = function(alarmTime) {
  if (moment().format("HH:mm A") === alarmTime) {
    alert("Wake up!");
  }
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

},{"./../js/alarm.js":1,"./../js/timeformat.js":2}]},{},[3]);
