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
  });

  modal();
  $(".submitSI").click(function(e) {
    e.preventDefault();
    validation();
  });

  $(".submitSU").click(function(e) {
    e.preventDefault();
    validation();
  });
});

function createFromTemplate() {
  var temp = '<button class="fas fa-chevron-circle-up" id="strelica"></buttons>';
  var element = $(temp);
  $("body").append(element);
}

function modal() {
  var modal = $(".login-modal");
  modal.hide();
  $(".log-reg").click(function() {
    modal.fadeIn(1000);
  });

  $("#close").click(function() {
    modal.fadeOut(1000);
  });

  $(document).click(function(e) {
    if(!$(e.target).closest(".login-modal,.log-reg").length) {
   $("body").find(".login-modal").fadeOut(1000);
    }
  });
}

function validation() {
  var greske = [];
  var ok     = [];
  var email    = document.querySelector(".email");
  console.log(email.value);
  var regEmail = /^[a-z]+(\.[a-z]+)+(\.[1-9][0-9]{0,3}\.(0[0-9]|1[0-7]))?\@ict\.edu\.rs$/;
  var spanEmail = document.querySelector(".email-err");
  if(!regEmail.test(email) == email.value) {
    greske.push("Dozvoljeni su samo domeni ICT-a.");
    email.style.border = "2px solid #ffd81f";
    spanEmail.innerHTML = "Dozvoljeni su samo mailovi ICT-domena, formata ime.prezime.34.16@ict.edu.rs";
  } else {
    ok.push("Email: " + email.value);
    email.style.border = "none";
  }


}
