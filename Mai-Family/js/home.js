window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var x = document.getElementById("myTopnav2");
  let box = document.querySelector('#header');
  let box2 =  document.querySelector('#fixed-header');
  var h = box.clientHeight;
  if ( document.documentElement.scrollTop > (h-100)) {
    box2.style.visibility = "visible";
    box.style.visibility = "hidden";
    x.className = "fixed-topnav";
    //document.getElementById("fixed-header").style.padding = "0";
  } else {
    box2.style.visibility = "hidden";
    box.style.visibility = "visible";
    //document.getElementById("fixed-header").style.padding = "30% 0 0";

  }
}

function topNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function topNav2() {
  var x = document.getElementById("myTopnav2");
  x.style.background = "transparent";
  if (x.className === "fixed-topnav") {
    x.className += " responsive";
  } else {
    x.className = "fixed-topnav";
  }
}

//SLide Show function
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slide-active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " slide-active";
}
