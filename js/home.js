var slideIndex = 1;

console.log("First value of slide index = " +slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
// console.log("before"+slideIndex);

function showSlides(n) {
  var i; // defined
  var slides = document.getElementsByClassName("mySlides"); // slides.length = 3 , slide = array of  html object / div 1 & 2 & 3

  console.log("length of slides "+slides.length);

  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1} // to make the slide index not more than 3 
console.log("n value =" +n);
  if (n < 1) {slideIndex = slides.length} 
console.log("Slide Index value ="+slideIndex);

  for (i = 0; i < slides.length; i++) { // 
      slides[i].style.display = "none";
      console.log("slides[i]"+slides[0]);
 }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
      console.log("dots[i]"+dots[i]);
  }
  slides[slideIndex-1].style.display = "block";// slidIndex[0] , 
  dots[slideIndex-1].className += " active";

} 
showSlides(slideIndex);