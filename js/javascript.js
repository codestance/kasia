/*global $*/
/*global window*/

var slideTime = $('.hobby-image').length * 1000;
$('.hobby-image:gt(0)').hide();
setInterval(function () {
    "use strict";
    $('.hobby-image:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('.hobby-link');
}, slideTime);

$(function () {
    "use strict";
    $('#menu-button').click(function () {
        $(this).toggleClass('menu-button_open');
    });
    $('#menu-button').click(function () {
        $('#menu').toggleClass('menu-in');
    });
});

$("a").on("click", function () {
    "use strict";
    if (this.hash !== "") {
        $('#menu').removeClass('menu-in'); // close right menu after click
        $('#menu-button').removeClass('menu-button_open');
    }
});

$('.more').on('click', function () {
    "use strict";
    $('.articles-content-more').slideDown('slow');
    $('.more').css('display', 'none');
});
$('.less').on('click', function () {
    "use strict";
    $('.articles-content-more').slideUp('slow');
    $('html,body').scrollTop($('#articles').offset().top);
    $('.more').css('display', 'block');
});

function setTitle() {
    "use strict";
    if (window.matchMedia('(min-width: 1024px )').matches) {
        var teachingH = $('.teaching').height();
        $('.teaching-title').css("line-height", teachingH + 'px');

        var artH = $('.articles').height();
        $('.articles-title').css('line-height', artH + 'px');
    } else {
        $('.teaching-title').css("line-height", 80 + 'px');
        $('.articles-title').css('line-height', 80 + 'px');
    }
}

$(window).on('resize', setTitle).resize();
