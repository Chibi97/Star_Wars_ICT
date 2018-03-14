$(document).ready(function() {
  var sendvic = $("#sandwich");
  var iks = $("#x");
  var glMeni = $(".gl-meni");
  var aniSpeed = 500;
  createFromTemplate();

  $("#strelica").click(function() {
    $("html").animate({scrollTop: 0}, 200);
    $("#strelica").fadeOut();
  });

  $(document).scroll(function() {
    if($("html").scrollTop() == 0) {
      $("#strelica").fadeOut();
    }
    $("#strelica").show();
  });

  sendvic.click(function() {
    glMeni.animate({
      right:0
    }, aniSpeed , function() {
      sendvic.hide();
    });

  });

  iks.click(function() {
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
