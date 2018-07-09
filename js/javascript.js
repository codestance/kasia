/*global $*/
/*global window*/
// var index = 0;
// slideShow();
var slideTime = $('.hobby-image').length * 1000;
console.log(slideTime);
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
        // event.preventDefault();
        var hash = this.hash;
        $('#menu').removeClass('menu-in'); // close right menu after click
        $('#menu-button').removeClass('menu-button_open');
    }
});

$('.more').on('click', function () {
    "use strict";
    var tH = $('.articles-title-box').height();
    $('.articles-content-more').slideDown('slow');
    $('.articles-title-box').css('height', tH, +'px');
    $('.more').css('display', 'none');
});
$('.less').on('click', function () {
    "use strict";
    // tutaj!! ustalanie wartości wysokości art-title-box po zamknieciu dodatkowych art
    var tH = $('.articles-title-box').height();
    $('.articles-content-more').slideUp('slow');
    $('.articles-title-box').css('height', tH, +'px');
    $('.more').css('display', 'block');
});


function setArticlesTitle() {
    "use strict";
    if (window.matchMedia('(min-width: 1024px )').matches) {
        var teachingH = $('.teaching-part-1').height();
        $('.teaching-title').css("line-height", teachingH + 'px');

        // var artPadd = parseInt($('.articles-content').css('padding-top')) + parseInt($('.articles-content').css('padding-bottom'));
        // var artH = $('.articles-content').height() + artPadd;
        // $('.articles-title-box').css('height', artH + 'px');
        var artH = $('.articles').height();
        // $('.articles-title-box').css('height', artH + 'px');
        $('.articles-title').css('line-height', artH + 'px');
    } else {
        $('.teaching-title').css("line-height", 80 + 'px');
        $('.articles-title').css('line-height', 80 + 'px');
    }
}

// window.addEventListener('load',setArticlesTitle());
// $(window).on('load', setArticlesTitle());

// var tablet = 1024;
// if ($(window).width() > tablet) {
$(window).on('resize', setArticlesTitle).resize();
// $('.articles-content').on('resize', setArticlesTitle()).resize();
// }