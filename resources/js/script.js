/* global $ */
/* eslint-env jquery */

$('document').ready(function () {
    
    /*---practice
    $('h1').click(function() {
        $(this).css('background-color', '#ff0000')
    })
    practice---*/
    
    ////* FOR THE SRICKY NAVIGATION *////
    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down"){
           $('nav').addClass('sticky');
        }  else{
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '-5px'
    })
    
    ////* FOR SCROLL ON BUTTONS */////
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans' ).offset().top}, 1000/*mm/sec*/);
    });
    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features' ).offset().top}, 1000);
    });

    ////* FOR SMOOTH SCROLLING  COPY&PAST */////
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    ////* ANIMATION ON SCROLL */////
    
    //When you reach waypoint 1
    $('.js--wp-1').waypoint(  
        (direction) => {
        // add the class animated__animated and animate__fadeIn to waypoint 1
          $('.js--wp-1').addClass('animate__animated animate__fadeIn');
        },
        {
          offset: '50%',
        }
      );
    //When you reach waypoint 2
      $('.js--wp-2').waypoint(
        (direction) => {
    // add the class animated__animated and animate__fadeInLeft to waypoint 2
          $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
        },
        {
          offset: '50%',
        }
      );
    //When you reach waypoint 3
      $('.js--wp-3').waypoint(
        (direction) => {
     // add the class animated__animated and animate__fadeIn to waypoint 3
          $('.js--wp-3').addClass('animate__animated animate__fadeIn');
        },
        {
          offset: '50%',
        }
      );
    //When you reach waypoint 4
      $('.js--wp-4').waypoint(
        (direction) => {
    // add the class animated__animated and animate__bounceIn to waypoint 4
          $('.js--wp-4').addClass('animate__animated animate__bounceIn');
        },
        {
          offset: '25%',
        }
      );
    /*
    $('js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '50%';
    })};*/
    
    //When you reach THE HEADER
    $('.js--header').waypoint(
        (direction) => {
          if (direction === 'up') {
    // remove the animation classes from all waypoints (1 - 4)
            $('.js--wp-1').removeClass('animate__animated animate__fadeIn');
            $('.js--wp-2').removeClass('animate__animated animate__fadeInLeft');
            $('.js--wp-3').removeClass('animate__animated animate__fadeIn');
            $('.js--wp-4').removeClass('animate__animated animate__bounceIn');
          }
        },
        {
          offset: '-25%',
        }
      );
    
    
    ////* MOBILE NAVIGATION */////        
//      $('.js--nav-icon').click(function(){
//        const nav = $('.js--main-nav')
//        const icon = $('.js--nav-icon ion-icon')
       
//        nav.slideToggle(200/*mm/sec*/)
 
        
//       if (icon[0].name == 'menu-outline') {
//            icon[0].name = 'close-outline'
//        } else if (icon[0].name == 'close-outline') {
//           icon[0].name = 'menu-outline'
//       }
    //       }) 
    
    
    $('.js--nav-icon, .js--main-nav a, .logo-black').click(function(element) {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
      
        //Gets the class name of the element that triggered the event
        var clicked = element.target.className;
      
        //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
        if (icon.hasClass('ion-navicon-round') && clicked == 'logo-black')
          return;
      
        //Opens and closes the menu
        if ($(window).width() < 768) {
          nav.slideToggle(200);
        }
      
        //Changes icon states of the menu button
        if (icon.hasClass('ion-navicon-round')) {
          icon.addClass('ion-close-round');
          icon.removeClass('ion-navicon-round');
        } else {
          icon.addClass('ion-navicon-round');
          icon.removeClass('ion-close-round');
        }
      });
      
      
      $(window).resize(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
      
        if ($(window).width() > 767) {
          nav.css("display", "block");
          icon.addClass('ion-close-round');
          icon.removeClass('ion-navicon-round');
        } else {
          nav.css("display", "none");
          icon.addClass('ion-navicon-round');
          icon.removeClass('ion-close-round');
        }
      
      });
    
    
});