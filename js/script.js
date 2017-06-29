var pink = document.querySelector(".works__pink");
var popup = document.querySelector(".works__modal--pink");
var close = popup.querySelector(".works__header--pink");

pink.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("works__show-pink");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("works__show-pink");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("works__show-pink")) {
      popup.classList.remove("works__show-pink");
    }
  }
});

var sedona = document.querySelector(".works__sedona");
var popup2 = document.querySelector(".works__modal--sedona");
var close2 = popup2.querySelector(".works__header--sedona");

sedona.addEventListener("click", function(event) {
  event.preventDefault();
  popup2.classList.toggle("works__show-sedona");
});

close2.addEventListener("click", function(event) {
  event.preventDefault();
  popup2.classList.remove("works__show-sedona");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup2.classList.contains("works__show-sedona")) {
      popup2.classList.remove("works__show-sedona");
    }
  }
});

var take = document.querySelector(".works__take");
var popup3 = document.querySelector(".works__modal--take");
var close3 = popup3.querySelector(".works__header--take");

take.addEventListener("click", function(event) {
  event.preventDefault();
  popup3.classList.toggle("works__show-take");
});

close3.addEventListener("click", function(event) {
  event.preventDefault();
  popup3.classList.remove("works__show-take");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup3.classList.contains("works__show-take")) {
      popup3.classList.remove("works__show-take");
    }
  }
});
