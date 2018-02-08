$(document).ready(function() {
	
	   //  SCROLL SCRIPT FUNCTION FOR NAVBAR 
         $(function () {
             $('.scrollclass a').bind('click', function (event) { //just pass scrollclass in design and start scrolling
                 var $anchor = $(this);
                 $('html, body').stop().animate({
                     scrollTop: $($anchor.attr('href')).offset().top
                 }, 1000, 'easeInOutQuad');
                 event.preventDefault();
             });
         });
            //Removing the added to navbar when users scrolling
            $(window).scroll(function () {
                if ($(".navbar").offset().top >40) {
                    $(".navbar-fixed-top").addClass("navbar-pad-original");
                } else {
                    $(".navbar-fixed-top").removeClass("navbar-pad-original");
                }
            })
		});