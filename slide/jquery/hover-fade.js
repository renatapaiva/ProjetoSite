/* IMAGE FADE */

$(function() {
// OPACITY OF BUTTON SET TO 50%
$(".latest_img").css("opacity","1.0");
		
// ON MOUSE OVER
$(".latest_img").hover(function () {
										  
// SET OPACITY TO 100%
$(this).stop().animate({
opacity: 0.6
}, "slow");
},
		
// ON MOUSE OUT
function () {
			
// SET OPACITY BACK TO 50%
$(this).stop().animate({
opacity: 1.0
}, "slow");
});
});


$(function() {
// OPACITY OF BUTTON SET TO 50%
$("#text p").css("opacity","0.6");
		
// ON MOUSE OVER
$("#text p").hover(function () {
										  
// SET OPACITY TO 1000%
$(this).stop().animate({
opacity: 0.8
}, "slow");
},
		
// ON MOUSE OUT
function () {
			
// SET OPACITY BACK TO 50%
$(this).stop().animate({
opacity: 0.6
}, "slow");
});
});


$(function() {
// OPACITY OF BUTTON SET TO 50%
$("#div").css("opacity","0.6");
		
// ON MOUSE OVER
$("#div").hover(function () {
										  
// SET OPACITY TO 100%
$(this).stop().animate({
opacity: 1.0
}, "slow");
},
		
// ON MOUSE OUT
function () {
			
// SET OPACITY BACK TO 50%
$(this).stop().animate({
opacity: 0.6
}, "slow");
});
});