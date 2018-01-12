//komentarz obejmuje tylko linie
/* to też jest komentarz*/

//$(document).ready(function(){
	//console.log('Wernor');
//});

/* Dynamic top menu positioning
 *
 */

var num = 0; //number of pixels before modifying styles

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.menu').addClass('fixed');
    } else {
        $('.menu').removeClass('fixed');
    }
});

//USE SCROLL WHEEL FOR THIS FIDDLE DEMO
