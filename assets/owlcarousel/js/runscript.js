 jQuery(document).ready(function($) {
             var owl = $('.owl-carousel');
             owl.owlCarousel({
                   items:1,
                   dots:false,
                   nav:true,
                   navText: ['<i class="fa fa-chevron-left fa-3x"></i>', '<i class="fa fa-chevron-right fa-3x"></i>'],
                   loop:true,
                   margin:20,
                  autoplay:true,
                  autoplayTimeout:9000,
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
