/*global $*/
/*global window*/
var img = document.createElement('img');
var div = document.createElement('div');
$(div).addClass('description-box');
var mobileDiv = document.createElement('div');
$(mobileDiv).addClass('description-mobile');
var elem;
$('.image').uniqueId();


function showDesc(a) {
    "use strict";
    $(a).empty();
    var desc = elem.siblings()[0].cloneNode(true);
    $(desc).css('display', 'block');
    $(a).append(desc);
}

$(window).on('resize', function () {
    "use strict";
    $('.image').off();
    if (window.matchMedia('(max-width: 414px ) and (orientation: portrait)').matches) {
        $('.fullscreen').css('display', 'none');
        $('.image').on('click', function () {
            elem = $(this);
            elem.parent().append(mobileDiv);
            $(mobileDiv).css('display', 'block');
            showDesc(mobileDiv);
            $(mobileDiv).on('click', function () {
                elem.parent().children('div').remove();
            });
        });
    } else {
        $(mobileDiv).css('display', 'none');
        $('.image').on('click', function () {
            elem = $(this);
            var src = elem.attr('src');
            $(img).attr('src', src);
            $('.fullscreen').css('display', 'block');
            $('.fullscreen').append(img);
            $('.fullscreen').append(div);
            showDesc(div);
        });
    }
}).resize();

function imgClose() {
    "use strict";
    $('.fullscreen').children('img').remove();
    $(div).empty();
    $('.fullscreen').children('div').remove();
    $('.fullscreen').css('display', 'none');
}

$('.btn-close').on('click', function () {
    "use strict";
    imgClose();
});

function getNeighbors() {
    "use strict";
    var next = null, prev = null, found = false;
    $('.image').toArray().forEach(function (a) {
        if (found && next === null) {
            next = $(a);
        }
        if ($(a).attr('id') === elem.attr('id')) {
            found = true;
        }
        if (!found) {
            prev = $(a);
        }
    });
    if (next === null) {
        next = $('.image').first();
    }
    if (prev === null) {
        prev = $('.image').last();
    }
    return {next: next, prev: prev};
}

function imgNav(a) {
    "use strict";
    elem = getNeighbors()[a];
    $(img).attr('src', elem.attr('src'));
    $('.fullscreen').append(img);
    // $(div).empty();
    showDesc(div);
}

$('.btn-right').on('click', function () {
    "use strict";
    imgNav('next');
});

$('.btn-left').on('click', function () {
    "use strict";
    imgNav('prev');
});

$(document).keydown(function (e) {
    "use strict";
    if ($('.fullscreen').css('display') === 'block') {
        switch (e.key) {
        case 'ArrowLeft':
            imgNav('prev');
            break;
        case 'ArrowRight':
            imgNav('next');
            break;
        case 'Escape':
            imgClose();
            break;
        default:
            return;
        }
        e.preventDefault();
    }
    e.stopPropagation();
});