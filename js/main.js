$(document).ready(function() {
    $('.menu-toggle').on('click', function() {
        if ($('.top-nav').hasClass("open")) {
            $(this).toggleClass('close')
            $('.top-nav').toggleClass('close')
            $(this).removeClass('open')
            $('.top-nav').removeClass('open')
        } else {
            $(this).toggleClass('open')
            $('.top-nav').toggleClass('open')
            $(this).removeClass('close')
            $('.top-nav').removeClass('close')
        }
    })

    $('.top-nav .nav-link').on('click', function() {
        $('.menu-toggle').removeClass('open')
        $('.top-nav').removeClass('open')
    })

    $('nav a[href*="#"]').on('click', function() {
       $('html, body').animate({
           scrollTop: $($(this).attr('href')).offset().top - 50
       }, 2000)
    })

    $('#up').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000)
    })

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })
})