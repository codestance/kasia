/* H O B B Y*/
var index=1;
showDivs(index);

function plusDivs(n) {
  showDivs(index += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("hobbyPhoto");
  if (n > x.length) {index = 1;}    
  if (n < 1) {index = x.length;}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[index-1].style.display = "block";  
}