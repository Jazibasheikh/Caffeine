// Smooth scroll for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


$(document).ready(function() {
    // Smooth scrolling for internal links
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });

    // Fade in elements on scroll
    $(window).scroll(function() {
        $('.featured-products-section, .testimonials-section, .newsletter-section').each(function() {
            var scrollPos = $(window).scrollTop();
            var elemOffset = $(this).offset().top - 300;
            if (scrollPos > elemOffset) {
                $(this).animate({'opacity': '1'}, 1000);
            }
        });
    });

    // Initially hide sections for fade-in effect
    $('.featured-products-section, .testimonials-section, .newsletter-section').css('opacity', '0');
});