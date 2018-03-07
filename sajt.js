$(document).ready(function() {
  var sendvic = $("#sandwich");
  var iks = $("#x");
  var glMeni = $(".gl-meni");
  var aniSpeed = 500;
  createFromTemplate();

  //var isScrollingAnimate = false;
  $("#strelica").click(function() {
    //isScrollingAnimate = true;
    $("html").animate({scrollTop: 0}, 200);
    $("#strelica").fadeOut();
  });

  $(document).scroll(function() {
    //if(isScrollingAnimate) return;
    if($("html").scrollTop() == 0) {
      $("#strelica").fadeOut();
    }
    $("#strelica").show();
  });

  sendvic.click(function() {
    /*glMeni.css({
      display: "block"
    });*/
    glMeni.animate({
      right:0
    }, aniSpeed , function() {
      sendvic.hide();
    });

  });

  iks.click(function() {
    /*glMeni.css({
      display:"none"
    });*/

    sendvic.show();
    glMeni.animate({
      right:"-28rem"
    }, aniSpeed);
  })
});

function createFromTemplate() {
  var temp = '<button class="fas fa-chevron-circle-up" id="strelica"></buttons>';
  var element = $(temp);
  $("body").append(element);
}
