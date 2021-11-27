
// var slideIndex = 1;
// showDivs(slideIndex);
// function plusDivs(n) 
// {
// showDivs(slideIndex += n);
//  };
// function showDivs(n) {
// var i;
// var x = document.getElementsByClassName("banner-slide-item");
// if (n > x.length) 
// {
//     slideIndex = 1
// };
//  if (n < 1) {
//      slideIndex = x.length
//     };
// for(i = 0; i < x.length; i++)
//  {
//      x[i].style.display = "none";
//     };
// x[slideIndex-1].style.display = "block";

// };
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("banner-slide-item");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


function cont()
{
    document.getElementById("movie").style.border="none";
    document.getElementById("series").style.border="none";
    document.getElementById("Gener").style.border="none";
    document.getElementById("Home").style.border="none";
    document.getElementById("pri-head").style.borderBottom="none";
    document.getElementById("contact-head").style.borderBottom="2px solid #0397d6";
}
function pri()
{
    document.getElementById("contact-head").style.border="none";
    document.getElementById("movie").style.border="none";
    document.getElementById("series").style.border="none";
    document.getElementById("Gener").style.border="none";
    document.getElementById("Home").style.border="none";
    document.getElementById("pri-head").style.borderBottom="2px solid #0397d6";
}
function hom()
{
    document.getElementById("contact-head").style.border="none";
    document.getElementById("movie").style.border="none";
    document.getElementById("series").style.border="none";
    document.getElementById("Gener").style.border="none";
    document.getElementById("pri-head").style.border="none";
    document.getElementById("Home").style.borderBottom="2px solid #0397d6";
}

// ---------------------------------------------sidebar----------------------------------
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }



  let q=document.getElementById("dropdow");
  
  const op=()=>{
    if(q.style.display=="none")
    {
      q.style.display="block";
    }
    else
    {
      q.style.display="none";
    }

  };



//   function open()
//   {
//       let val=document.getElementById("dropdow").style.display;
//       if(val=="none"){
//       document.getElementById("dropdow").style.display="block";
//       }
//       else{
//         document.getElementById("dropdow").style.display="none";
//       }
//       document.getElementById("dropdow").style.backgroundColor="#333";
//   }