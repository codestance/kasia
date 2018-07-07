/*global $*/
var img = document.createElement('img');
var div = document.createElement('div');
$(div).addClass('description-box');
var elem;
$('.image').uniqueId();

$('.image').on('click', function () {
    "use strict";
    elem = $(this);
    var src = $(this).attr('src');
    $(img).attr('src', src);
    $('.fullscreen').css('display', 'block');
    $('.fullscreen').append(img);
    $('.fullscreen').append(div);
    var desc = $(this).siblings()[0];
    $(desc).css('display', 'block');
    $(div).append(desc);
});

$('.btn-close').on('click', function () {
    "use strict";
    $('.fullscreen').children('img').remove();
    $('.fullscreen').css('display', 'none');
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
    var desc = $(elem).siblings()[0];
    $(div).append(desc);
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
    if ($('.fullscreen').css('display', 'block')) {
        switch (e.key) {
        case 'ArrowLeft':
            imgNav('prev');
            break;
        case 'ArrowRight':
            imgNav('next');
            break;
        default:
            return;
        }
    }
    e.preventDefault();
});