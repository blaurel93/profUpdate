$(document).ready(function () {
    $('.toggle').on('click', function () {
        $('.navbar').toggleClass('active')
    })


    // Navigation Section //


    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 3000);
        return false;
    });



});