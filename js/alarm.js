exports.alarmClock = function(alarmTime) {
  if (moment().format("HH:mm A") === alarmTime) {
    alert("Wake up!");
  }
};
