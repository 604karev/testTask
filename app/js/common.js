$(function () {

    $('.carousel').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear'

    });
});
$(document).ready(function () {
    var navBar = $(".navBar");
    var icon = $('.icon');
    icon.on('click', function () {
        navBar.toggleClass('menuActive');
        navBar.slideToggle();
    });
});
