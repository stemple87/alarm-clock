var getFormattedTime = require('./../js/timeformat.js').getFormattedTime;

$(document).ready(function(){
  var newTime = moment().format("HH:mm");
  var theTime = getFormattedTime(newTime);
  $('#time').text(theTime);
});
