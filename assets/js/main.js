$(document).ready(function(){

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});


   
 

    /*
   *   Background parallax effect
   **/

$(function(){
    //cache the window object
    var $window = $(window);
    //Parallax background effect
    $('section[data-type="background"]').each(function(){
    //assigning object 
    var $bgobj = $(this);
    $(window).scroll(function(){
        //scroll the background at var speed
        //the yPos is a negative value because we're scrolling it up
     
    var yPos = -($window.scrollTop() / $bgobj.data('speed'));
    //putting together our final background position
    var coords = '50%'+yPos+ 'px';
    //Move the background
    $bgobj.css({backgroundPosition: coords});
    });
    });
});


   /*
   *   Owl carousel
   **/
$(document).ready(function($) {
             var owl = $('.owl-carousel');
             owl.owlCarousel({
                   items:1,
                   dots:false,
                   nav:true,
                   navText: ['<i class="fa fa-chevron-left fa-1x"></i>', '<i class="fa fa-chevron-right fa-1x"></i>'],
                   loop:true,
                   margin:15,
                  autoplay:false,
                  autoplayTimeout:5000,
                  autoplayHoverPause:false,
                  responsiveClass:true,
                  responsive:{
                    0:
                    {
                      items:1 
                    },
                    400:
                    {
                      items:1 
                    },
                    700:
                    {
                      items:1 
                    },
                    1000:
                    {
                      items:1 
                    }

                  }
               });
          $('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
});
          $('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
     });



    /*
   *   Nicescroll 
   **/

    jQuery("body").niceScroll({
    cursorcolor:"rgb(51, 51, 51)",
    cursorborder:"0px",
    cursorwidth :"8px",
    zindex:"9999"
  });

});