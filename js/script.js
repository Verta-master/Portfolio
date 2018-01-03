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
