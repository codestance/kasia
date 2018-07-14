/*global $*/
/*global window*/
// var index = 0;
// slideShow();
var slideTime = $('.hobby-image').length * 1000;
// console.log(slideTime);
$('.hobby-image:gt(0)').hide();
setInterval(function () {
    "use strict";
    $('.hobby-image:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('.hobby-container');
}, slideTime);


// function slideShow() {
//     "use strict";
//     var i;
//     for (i = 0; i < $('.hobby-image').length; i++) {
//         $($('.hobby-image')[i]).css('display', 'none');
//     }
//     index++;
//     if (index > $('.hobby-image').length) {
//         index = 1;
//     }
//     $($('.hobby-image')[index - 1]).css('display', 'block');
//     setTimeout(slideShow, 3000);
// }

// $(function smoothScroll() {
//     "use strict";
//     $('a[href*="#"]:not([href="#"])').click(function () {
//         if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
//             var item = $(this.hash);
//             item = item.length ? item : $('[name=' + this.hash.slice(1) + ']');
//             if (item.length) {
//                 $('html, body').animate({
//                     scrollTop: item.offset().top
//                 }, 1000);
//                 return false;
//             }
//         }
//     });
// });

$(function () {
    "use strict";
    $('#menu-button').click(function () {
        $(this).toggleClass('menu-button_open');
    });
    $('#menu-button').click(function () {
        $('#menu').toggleClass('menu-in');
    });
});

$("a").on("click", function (event) {
    if (this.hash !== "") {
        var hash = this.hash;
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
