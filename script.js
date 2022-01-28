// Dom elements
var timeDisplayEl = $('#currentDay');
// set time and date 
// time and date 
function displayTime() {
var rightNow = moment().format('dddd MMM Do, YYYY [at] hh:mm:ss a');
timeDisplayEl.text(rightNow);
};
setInterval(displayTime, 1000);
// save my input to local storage 
$(document).ready(function(){
    $('.description').each(function() {
        let id_key = $(this).attr("id");
        $(this).val(localStorage.getItem(id_key));
        console.log();
    })
    $('.hour').each(function () {
        let currentTime = parseInt(moment().format('k'));
        let time_Block = parseInt($(this).text());
        if(time_Block < currentTime) {
            $(this).siblings('.description').addClass('past');
        }else if(time_Block > currentTime) {
            $(this).siblings('.description').addClass('future');
        }else {
            $(this).siblings('.description').addClass('present');
        }
    });
});
// when save button is clicked 
$(".saveBtn").on("click", function() {
    $('.description').each(function() {
        let id_key = $(this).attr("id");
        localStorage.setItem(id_key,$(this).val());
    });
});
