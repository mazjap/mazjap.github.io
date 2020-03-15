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

var project1_slide_index = 1; displaySlides(project1_slide_index, 1)
var project2_slide_index = 1; displaySlides(project2_slide_index, 2)
var project3_slide_index = 1; displaySlides(project3_slide_index, 3)

function nextSlide(val, num) {
    if (num == 1) {
        displaySlides(project1_slide_index += val, num)
    } else if (num == 2) {
        displaySlides(project2_slide_index += val, num)
    } else if (num == 3) {
        displaySlides(project3_slide_index += val, num)
    }
}

function currentSlide(val, num) {
    if (num == 1) {
        displaySlides(project1_slide_index = val, num)
    } else if (num == 2) {
        displaySlides(project2_slide_index = val, num)
    } else if (num == 3) {
        displaySlides(project3_slide_index = val, num)
    }
}

function displaySlides(num, projectNum) {
    var i
    var slides = document.getElementsByClassName("project".concat(projectNum, "_showSlide"))
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    if (projectNum == 1) {
        if (num > slides.length) { project1_slide_index = 1 }
        if (num < 1) { project1_slide_index = slides.length }
        slides[project1_slide_index - 1].style.display = "block"
    } else if (projectNum == 2) {
        if (num > slides.length) { project2_slide_index = 1 }
        if (num < 1) { project2_slide_index = slides.length }
        slides[project2_slide_index - 1].style.display = "block"
    } else if (projectNum == 3) {
        if (num > slides.length) { project3_slide_index = 1 }
        if (num < 1) { project3_slide_index = slides.length }
        slides[project3_slide_index - 1].style.display = "block"
    }
}