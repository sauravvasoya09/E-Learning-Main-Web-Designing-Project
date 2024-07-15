$(document).ready(function(){
     
     $('.tablate-menu').hide();
     $('.tablate-sub-menu').hide();
     
     $('.menu-open').click(function(){
          
          $('.tablate-menu').slideToggle();

     });

     $('.tablate-menu > li > a').click(function(){

          $(this).next('.tablate-sub-menu').slideToggle();

     });

     $('#main-slider').owlCarousel({
          loop:true,
          margin:10,
          dots:false,
          autoplay: true,
          responsiveClass:true,
          responsive:{
              0:{
                  items:1,
                  nav:true
              },
              600:{
                  items:1,
                  nav:true
              },
              1000:{
                  items:1,
                  nav:true,
                  loop:true
              }
          }
      })

        $('#customers-testimonials').owlCarousel({
             loop: true,
             center: true,
             items: 3,
             margin: 0,
             autoplay: true,
             dots:true,
             autoplayTimeout: 8500,
             smartSpeed: 450,
             responsive:{
                            0:{
                                items:1,
                                nav:false
                            },
                            600:{
                                items:2,
                                nav:false
                            },
                            1000:{
                                items:3,
                                nav:false,
                                loop:true
                            }
                        }  
                  });

});