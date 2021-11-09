// cuando se hace scroll se ejecuta la funcion myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var barra = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = barra.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    barra.classList.add("sticky");
  } else {
    barra.classList.remove("sticky");
  }
}
