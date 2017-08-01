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

var ber = document.querySelector(".works__berezki");
var popup4 = document.querySelector(".works__modal--berezki");
var close4 = popup4.querySelector(".works__header--berezki");

ber.addEventListener("click", function(event) {
  event.preventDefault();
  popup4.classList.toggle("works__show-berezki");
});

close4.addEventListener("click", function(event) {
  event.preventDefault();
  popup4.classList.remove("works__show-berezki");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup4.classList.contains("works__show-berezki")) {
      popup4.classList.remove("works__show-berezki");
    }
  }
});

var jsb = document.querySelector(".works__jsb");
var popup5 = document.querySelector(".works__modal--jsb");
var close5 = popup5.querySelector(".works__header--jsb");

jsb.addEventListener("click", function(event) {
  event.preventDefault();
  popup5.classList.toggle("works__show-jsb");
});

close5.addEventListener("click", function(event) {
  event.preventDefault();
  popup5.classList.remove("works__show-jsb");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup5.classList.contains("works__show-jsb")) {
      popup5.classList.remove("works__show-jsb");
    }
  }
});

var cre = document.querySelector(".works__creative");
var popup6 = document.querySelector(".works__modal--creative");
var close6 = popup6.querySelector(".works__header--creative");

cre.addEventListener("click", function(event) {
  event.preventDefault();
  popup6.classList.toggle("works__show-creative");
});

close6.addEventListener("click", function(event) {
  event.preventDefault();
  popup6.classList.remove("works__show-creative");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup6.classList.contains("works__show-creative")) {
      popup6.classList.remove("works__show-creative");
    }
  }
});

//scroll to menu anchors

$(document).ready(function(){
  $(".list").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  });

//scroll to arrow anchors

  $(".arrow").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });
  
//scroll to top
  
  $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".arrow--back").fadeIn();
        } else {
            $(".arrow--back").fadeOut();
        }
    });
  $(".arrow--back").click(function () {
      $("body,html").animate({
          scrollTop: 0
      }, 400);
      return false;
  });
});
