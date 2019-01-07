'use strict';
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function current_li(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  let i;
  let slide = document.getElementsByClassName("mySlide");
  let point = document.getElementsByClassName("js_demo");
  let item = document.getElementsByClassName("js_item");
  if (n > slide.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slide.length}
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
    item[i].style.display = "none";  
  }
  
  for (i = 0; i < point.length && i < item.length; i++) {
    point[i].className = point[i].className.replace(" item-slider-active", "");
  } 
  slide[slideIndex-1].style.display = "block";  
  item[slideIndex-1].style.display = "block";  
  point[slideIndex-1].className += " item-slider-active";  
}