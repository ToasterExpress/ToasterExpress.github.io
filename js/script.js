function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let slideIndex = 0;

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
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

let index = 0;
displaySlides();
function displaySlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slides[slideIndex].style.display = "block";
  showSlides(slideIndex);
  slideIndex++;
  populateNumberText();
  setTimeout(displaySlides, 5000);
}

//Function that get's the element numberText and populates it based on the number of slides
function populateNumberText() {
  const slides = document.getElementsByClassName("mySlides");
  let numberTexts = document.getElementsByClassName("numbertext");
  numberTexts[slideIndex-1].innerHTML = slideIndex + " / " + slides.length;
}

