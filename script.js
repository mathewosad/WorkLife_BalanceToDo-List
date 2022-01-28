// Dom elements
var timeDisplayEl = $('#currentDay');
// set time and date 
// Resizeable Table that fits contents 
//  
// time and date 
function displayTime() {
var rightNow = moment().format('dddd MMM Do, YYYY [at] hh:mm:ss a');
timeDisplayEl.text(rightNow);
};
setInterval(displayTime, 1000);
