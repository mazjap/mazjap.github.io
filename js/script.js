$(document).ready(function() {
    $('.menu-toggle').on('click', function() {
        if ($('.top-nav').hasClass("open")) {
            $('.top-nav').toggleClass('close')
            $('.top-nav').removeClass('open')
        } else {
            $('.top-nav').toggleClass('open')
            $('.top-nav').removeClass('close')
        }
    })

    $('.top-nav .nav-link').on('click', function() {
        $(".menu-toggle input").click()
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