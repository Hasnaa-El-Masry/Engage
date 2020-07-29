$(function () {
    // Nav Change Style on scroll...
    $(window).scroll(function () {
        if($(this).scrollTop() > 50){
            $('.index-navbar .nav-item .nav-link, .index-navbar .navbar-brand').removeClass('text-white');
            $('.index-navbar .navbar span').removeClass('brdr-color');
            $('.nav-link.contact-btn').addClass('nav-btn-scrolled');
            $('nav').addClass('nav-scrolled');
        }else{
            $('.index-navbar .nav-item .nav-link ,.index-navbar .navbar-brand').addClass('text-white');
            $('.index-navbar .navbar span').removeClass('brdr-color');
            $('.nav-link.contact-btn').removeClass('nav-btn-scrolled');
            $('nav').removeClass('nav-scrolled');
        }

    });
    
    // Header Height
    var windowH = $(window).height();
    $('header').height(windowH);

    // Owl Carousel Testimonilas Section...
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    // Scroll Top Button...
    var scrollBtn = $('.scroll-top-btn');
    $(window).scroll(function () {
        $(this).scrollTop() > 700 ? scrollBtn.show(1000) : scrollBtn.hide(1000);
    });

    scrollBtn.on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    })

    // Loading Screen 
    $(window).on('load', function () {
        $('body').css('overflow', 'auto');
        $('.sk-circle ').fadeOut(1000, function () {
            $(this).parent().fadeOut(1000, function () {
                $(this).remove();
            })
        });
    });
    
    //Select Option Box
    $('.fa-cogs').on('click',function(){
        $('.color-option').fadeToggle();
    });

    //Change Theme Color On Click
    $('.color-option ul li')
    .eq(0).css('backgroundColor','#4caf50').end()
    .eq(1).css('backgroundColor','#795548').end()
    .eq(2).css('backgroundColor','#218fe6').end()
    .eq(3).css('backgroundColor','#f44336').end()
    .eq(4).css('backgroundColor','#6c8796').end()
    .eq(5).css('backgroundColor','#9c27b0');

    $('.color-option ul li').on('click',function(){
        $('link[href*="theme"]').attr('href',$(this).data('value'));
    });
})