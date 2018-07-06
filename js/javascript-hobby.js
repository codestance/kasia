/* H O B B Y*/
// var index=1;
// showDivs(index);

// function plusDivs(n) {
//   showDivs(index += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("hobbyPhoto");
//   if (n > x.length) {index = 1;}    
//   if (n < 1) {index = x.length;}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   x[index-1].style.display = "block";  
// }
$('.image').on('click', function(){
	var img = document.createElement('img');
	var src = $(this).attr('src');
	$(img).attr('src',src);
	$('.fullscreen').css('display','block');
	$('.fullscreen').append(img);
	$('description-box').css('display', 'block');
})

$('.btn-close').on('click',function(){
	$('.fullscreen').children('img').remove();
	$('.fullscreen').css('display','none');
})

// $('.btn-right').on('click',function(){
// 	var img = document.createElement('img');
// 	var src = $(this).attr('src');
// 	if($(this).next().length){
// 		src = $(this).next().attr('src');
// 		$(img).attr('src',src);
// 		$('.fullscreen').append(img);
// 	}
// })