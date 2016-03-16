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
