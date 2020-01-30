$(document).ready(function() {

    /* Sticky Navigation*/
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '65px;'
    });

    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    /* Navigation Scroll */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              target.focus(); // Setting focus
              if (target.is(":focus")){ // Checking if the target was focused
                return false;
              } else {
                target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                target.focus(); // Setting focus
              };
              return false;
            }
          }
        });
      });


    /* Animations on Scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '40%'
    });

    /* Mobile Navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);
        if (icon.hasClass('ion-ios-menu')) {
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu')
        } else {
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close');
        }
    });

});

/* var waypoints = $('#handler-first').waypoint(function(direction) {
      notify(this.element.id + ' hit 25% from top of window') 
   }, {
      offset: '25%'
})
*/