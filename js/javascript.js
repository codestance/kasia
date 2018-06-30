var index = 0;
slideShow();

function slideShow() {
	var x = document.getElementsByClassName('hSlide');
	for (var i = 0; i<x.length; i++){
		x[i].style.display = 'none';
	}
	index++;
	if (index > x.length){
		index = 1;
	}
	x[index-1].style.display = 'block';
	setTimeout(slideShow, 3000);
}

$(function smoothScroll() {
	$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    	var item =$(this.hash);
    	item = item.length ? item : $('[name=' + this.hash.slice(1) +']');
		if (item.length){
			$('html, body').animate({
          	scrollTop: item.offset().top
        	}, 1000);
        	return false;
		}
	}
	});
});


// $(window).scroll(function(){
// 	var shrinkHeader = 100;
// 	var scroll = getCurrentScroll();
// 	if (scroll >= shrinkHeader){
// 		$('nav').addClass('nav-scroll');
// 	}
// 	else {
// 		$('nav').removeClass('nav-scroll');
// 	}
		
// 	function getCurrentScroll() {
// 		return window.pageYOffset || document.documentElement.scrollTop;
// 	}
// });

$(function(){
	$('#menu-button').click(function(){
		$(this).toggleClass('menu-button_open');
	});
	$('#menu-button').click(function(){
		$('#menu').toggleClass('menu-in');
	});
});

$("a").on("click", function(event){
	if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			
			$('#menu').removeClass('menu-in'); // close right menu after click
			$('#menu-button').removeClass('menu-button_open');
		}
});

$('.more').on('click',function(){
	$('.articles-content-more').css('display', 'block');
	$('.more').css('display','none');
})
$('.less').on('click',function(){
	$('.articles-content-more').css('display', 'none');
	$('.more').css('display','block');
})


var tablet = 1024;
if ($(window).width()>tablet){
	$(window).on('resize', function(){
		var setHeight = $('.teaching-part-1').height();
		$('.teaching-title').css("line-height", setHeight + 'px');

		var artH = $('.articles-content').height() + 40;
		$('.articles-title-box').css('height', artH + 'px');
		$('.articles-title').css('line-height', artH + 'px');
	}).resize();
}

// $(window).on('resize',function(){
// 	var artH = $('.articles-content').height() + 40;
// 	$('.articles-title-box').css('height', artH + 'px');
// 	$('.articles-title').css('line-height', artH + 'px');
// }).resize();