window.onload = function() {

  var carousel = document.getElementById('carousel');
  var canvas = document.getElementById('window');
  // Buttons
  var next = document.getElementById('next');
  var previous = document.getElementById('previous');

  carousel.style.marginLeft = "0px";

  var darkenButtons = function(event){
    next.style.opacity = 0.5;
    previous.style.opacity = 0.5;
  };

  var lightenButtons = function(event){
    next.style.opacity = 0.2;
    previous.style.opacity = 0.2;
  };

  var toRight = function(event){
      carousel.style.marginRight = "612px";
  }

  var toLeft = function(event){
      carousel.style.marginLeft = "612px";
  }

  next.addEventListener("click", toRight, false);
  previous.addEventListener("click", toLeft, false);

  //next.onclick = moveRight;
  // Create mouseoveer and mouseexit events for the buttons
  carousel.addEventListener("mouseover", darkenButtons, false);
  next.addEventListener("mouseover", darkenButtons, false);
  previous.addEventListener("mouseover", darkenButtons, false);

  carousel.addEventListener("mouseout", lightenButtons, false);
  next.addEventListener("mouseout", lightenButtons, false);
  previous.addEventListener("mouseout", lightenButtons, false);



};


// to change their opacity from .5 to .2

// Create onclick events to advance the images
