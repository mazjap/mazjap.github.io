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
           scrollTop: $($(this).attr('href')).offset().top
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

$(window).scroll(function() {
    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');
    
    var scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
        var $this = $(this);
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            $body.removeClass(function (index, css) {
                return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
            });
            $body.addClass('color-' + $(this).data('color'));
        }
    });
}).scroll();

var project_slide_indexes = [1, 1, 1, 1, 1]

for (var i = 1; i <= project_slide_indexes.length; i++) {
    displaySlides(project_slide_indexes[i - 1], i)
}

function nextSlide(projectNum) {
    displaySlides(project_slide_indexes[projectNum - 1] += 1, projectNum)
}

function prevSlide(projectNum) {
    displaySlides(project_slide_indexes[projectNum - 1] -= 1, projectNum)
}

function displaySlides(num, projectNum) {
    var slides = document.getElementsByClassName("project".concat(projectNum, "_showSlide"))
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    if (num > slides.length) { project_slide_indexes[projectNum - 1] = 1 }
    if (num < 1) { project_slide_indexes[projectNum - 1] = slides.length }
    slides[project_slide_indexes[projectNum - 1] - 1].style.display = "block"
}