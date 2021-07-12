var slideIndex = 1;

// console.log("First value of slide index = " + slideIndex);

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

  // console.log("length of slides " + slides.length);

  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 } // to make the slide index not more than 3 
  // console.log("n value =" + n);
  if (n < 1) { slideIndex = slides.length }
  console.log("Slide Index value =" + slideIndex);

  for (i = 0; i < slides.length; i++) { // 
    slides[i].style.display = "none";
    // console.log("slides[i]" + slides[0]);
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    // console.log("dots[i]" + dots[i]);
  }
  slides[slideIndex - 1].style.display = "block";// slidIndex[0] , 
  dots[slideIndex - 1].className += " active";

}
showSlides(slideIndex);





var slideIndex1 = 0;
showSlides1();

function showSlides1() {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) { slideIndex1 = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active1", "");
  }
  slides[slideIndex1 - 1].style.display = "block";
  dots[slideIndex1 - 1].className += " active1";
  setTimeout(showSlides1, 20000); // Change image every 2 seconds
}

var slideIndex2 = 0;
showSlides2();

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) { slideIndex2 = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active2", "");
  }
  slides[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active2";
  setTimeout(showSlides2, 10000); // Change image every 2 seconds
}


let globArray = ['A goat herder in Ethiopia discovered coffee in the 1500s. When his goats ate coffee cherries, he observed the goats got a lot of energy and couldn\'t sleep at night.When he saw the connection between the berries and the behavior, he shared his findings with the local monks.','Coffee pods are small containers of coffee. The law banning them first came in 2016 in Germany. It banned them because Coffee pods create unnecessary waste that contains aluminum.', 'Excess of everything is bad, even if it is the tastiest beverage on the earth. AsapSCIENCE, in a popular video, says that it would take 70 cups of coffee to kill a 150-pound person.','Due to caffeine differences, there are two main types of coffee.Arabica is named after the region Arabica Peninsula where it was cultivated. It makes the most of coffee production in the world and is consumed most prominently.Robusta has double amount of the caffeine compared to Arabica and comes from a hardy plant.'];


function randomFact() {
  return Math.floor(Math.random() * (globArray.length ));
}

let funFact=document.getElementById('fact');
let content=document.createElement('p');
funFact.appendChild(content);
content.textContent=globArray[randomFact()];

// console.log(randomFact());


let d;
d = new Date();
let imagMorningArray=['images/HomeImages/traditional-drip.png','images/HomeImages/home-3-icon-img-1.png','images/HomeImages/capuccino.png']; 
let imagEveningArray=['images/HomeImages/home-3-icon-img-5.png','images/HomeImages/home-3-icon-image-6.png','images/HomeImages/latte2.png']; 
let pMorningArray = ['Enjoy your morning with this traditional trurkish cofee drip','Enjoy your morning with a cup of Espresso, Waking up is 100% guarenteed','Do you love morning capuccino? Yes, but you still did not figure it out']
let pEveningArray = ['Nothing is better than a FRAPE at the evening, enjoy it','Set your mood to be high, Get your self a cup MOCHA ','LATE, it will alwayes fit for the evening time ']
let imageElement = document.getElementById('imageDrink');
let headdingText = document.getElementById('TimeTag');
let paragraphText = document.getElementById('recommend-text');


function randomDrinkMorning() {
  return Math.floor(Math.random() * (imagMorningArray.length ));}
  
// function randomDrinkevening() {
//   return Math.floor(Math.random() * (imagEveningArray.length ));}

let x;
function renderDrink(){
x=randomDrinkMorning();
currentTime= d.getHours();
if ( currentTime<=12){

  imageElement.setAttribute('src',imagMorningArray[x]);
  headdingText.textContent = " IT's Morning Time !";
  paragraphText.textContent = pMorningArray[x];

  
}

else if (currentTime >12){

  
    imageElement.setAttribute('src',imagEveningArray[x]);
    headdingText.textContent = " IT's Evening Time!";
    paragraphText.textContent = pEveningArray[x];
       
  }
}
renderDrink();


