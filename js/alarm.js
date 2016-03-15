exports.var alarmClock = function(alarmTime) {
  if (moment().format("HH:mm") === alarmTime) {
    alert("Wake up!")
  }
};
