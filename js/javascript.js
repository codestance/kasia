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


$(window).scroll(function(){
	var shrinkHeader = 100;
	var scroll = getCurrentScroll();
	if (scroll >= shrinkHeader){
		$('nav').addClass('nav-scroll');
	}
	else {
		$('nav').removeClass('nav-scroll');
	}
		
	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}

	
});
