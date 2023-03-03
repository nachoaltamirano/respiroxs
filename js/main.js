// Isotope activation js codes

$(function() {

    var window_width         = $(window).width(),
        window_height        = window.innerHeight,
        header_height        = $(".navbar-default").height(),
        fitscreen            = window_height - header_height;

    //Sticky Js active
    $("#main-header").sticky({topSpacing:0});
    $(".home-second-header").sticky({topSpacing:0, speed:50000});
    // Single Page smooth nav active
    $('#main-menu').singlePageNav({
        speed:1000
    });
    $('.footer-menu').singlePageNav({
        speed:1000
    });
    $('.home2-navbar').singlePageNav({
        speed:1000
    });
    // Search form click function
    $(".search-box button").click(function(){
        $(".search-box input").toggleClass("expand", 'easeInQuad');
        //$("this").closet().toggleClass(".search-box button");
    });
      //   $('input').focus(function(){
      //     $(this).attr("placeholder",'');
      // });
      //   $('textarea').focus(function(){
      //     $(this).attr("placeholder",'');
      // });

    // Active Isotp Plugin

            
        // change is-checked class on buttons
        $(window).on("load", function(){
            var $grid = $('.grid').isotope({
              itemSelector: '.grid-item',
          });

                // change is-checked class on buttons
                $(".filter-button-group .button").on("click", function(){
                  $(".filter-button-group .button").removeClass("is-cheked");
                  $(this).addClass("is-cheked");
              });
          $('.filter-button-group').on( 'click', '.button', function() {
              var filterValue = $(this).attr('data-filter');
              $grid.isotope({ filter: filterValue });
          });
        });

    // Active Testimonial Carousel 
    $('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    $('.next').click(function() {
        $(".testimonial-carousel").trigger('next.owl.carousel');
    })
        // Go to the previous item
    $('.prev').click(function() {
        $(".testimonial-carousel").trigger('prev.owl.carousel');
    });
    
    // Active Team Member Carousel
    $('.team-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    $('.next-team').click(function() {
        $(".team-carousel").trigger('next.owl.carousel');
    })
        // Go to the previous item
    $('.prev-team').click(function() {
        $(".team-carousel").trigger('prev.owl.carousel');
    });


    // Active Instagram Carousel Carousel
    $('.instagram-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        margin: 0
    })
    $('.next-ins').click(function() {
        $(".instagram-carousel").trigger('next.owl.carousel');
    })
        // Go to the previous item
    $('.prev-ins').click(function() {
        $(".instagram-carousel").trigger('prev.owl.carousel');
    });
    // Active Home 3 Service  Carousel
    $('.total-service').owlCarousel({
        loop: true,
        nav: true,
        navText : ["",""],
        dots: false,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        }

    })
    // Active Home 3 testimonial  Carousel
    $('.testimonial-content').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 600,
        autoplayHoverPause: true
    })

    $(".fullscreen").css("height", window_height)
    $(".fitscreen").css("height", fitscreen);

    $("[data-hover-color], [data-hover-opacity]").each(function() {
        var hoverColor = $(this).attr("data-hover-color");
        var hoverColorOpacity = $(this).attr("data-hover-opacity");
        $(this).css({
            backgroundColor: hoverColor,
            opacity: hoverColorOpacity
        });
        $(this).removeAttr("data-hover-color data-hover-opacity");
    });
        //Active Email Sent Msg
        $('#formSubmit').click(function(){ 
            var error = false;
            if(error == false){
                $.post("mail.php", $("#contactForm").serialize(),function(result){
                    if(result == 'sent'){
                        $('#contactForm').slideUp('slow');
                        $('#success').slideDown('slow');
                    }else{
                        $('#failed').fadeIn('slow');
                    }
                });
            }

            return false;
        });


});