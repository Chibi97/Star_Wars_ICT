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
    validationSU();
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
    modal.fadeIn(500);
  });

  $("#close").click(function() {
    modal.fadeOut(500);
  });

  $(document).click(function(e) {
    if(!$(e.target).closest(".login-modal,.log-reg").length) {
   $("body").find(".login-modal").fadeOut(1000);
    }
  });
}

function validation() {
  var ok     = [];
  var email    = document.querySelector(".email");
  console.log(email.value);
  var regEmail = /^[a-z]+(\.[a-z]+)+(\.[1-9][0-9]{0,3}\.(0[0-9]|1[0-7]))?\@ict\.edu\.rs$/;
  var spanEmail = document.querySelector(".email-err");
  if(!regEmail.test(email.value)) {
    email.style.border = "2px solid #ffd81f";
    spanEmail.innerHTML = "You've made a mistake young padawan! Btw, only iCT students/professors allowed in!";
  } else {
    ok.push("Email: " + email.value);
    email.style.border ="1px solid #FFD81F";
    spanEmail.innerHTML = "";
  }

  var password = document.querySelector(".password");
  var regPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  var spanPass = document.querySelector(".password-err");
  if(!regPass.test(password.value)) {
    password.style.border = "2px solid #ffd81f";
    spanPass.innerHTML = "In order to grasp the force, your password should contain at least one digit, at least one uppecase char, lowercase char and it should be at least 8 chars long.";
  } else {
    ok.push("Password: " + password.value);
    password.style.border ="1px solid  #ffd81f";
    spanPass.innerHTML = "";
  }
  goodJob(ok);
}

function validationSU() {
  var ok = [];
  var nameLastname = document.querySelector(".fnln");
  var spanFNLN = document.querySelector(".fnln-err");
  var regNameLastname =/^[A-Z][a-z]{2,15}(\s[A-Z][a-z]{2,15})+$/;
  if(!regNameLastname.test(nameLastname.value)) {
    nameLastname.style.border = "2px solid #ffd81f";
    spanFNLN.innerHTML = "The force is not strong in this one! Please, write grammatically correct!";
  } else {
    ok.push("Name and last name: " + nameLastname.value);
    nameLastname.style.border ="1px solid #FFD81F";
    spanFNLN.innerHTML = "";
  }

  var index = document.querySelector(".index");
  var spanIndex = document.querySelector(".index-err");
  var regIndex = /^[1-9][0-9]{0,3}\/(0[0-9]|1[0-7])$/;
  var condition = index.value.split("/");
  console.log(condition);
  console.log(Number(condition[0]));
  if(!regIndex.test(index.value) || Number(condition[0]) >= 2000) {
    index.style.border = "2px solid #ffd81f";
    spanIndex.innerHTML = "The format is n(nnn)/yy. Only numbers and slash allowed.";
  } else {
    ok.push("Student ID: " + index.value);
    index.style.border ="1px solid #FFD81F";
    spanIndex.innerHTML = "";
  }

  var password = document.querySelector(".passwordSU");
  var regPass  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  var spanPass = document.querySelector(".passwordSU-err");
  if(!regPass.test(password.value)) {
    password.style.border = "2px solid #ffd81f";
    spanPass.innerHTML = "In order to grasp the force, your password should contain at least one digit, at least one uppecase char, lowercase char and it should be at least 8 chars long.";
  } else {
    password.style.border ="1px solid  #ffd81f";
    spanPass.innerHTML = "";
  }

  var confirm  = document.querySelector(".confirm");
  var spanConf = document.querySelector(".confirm-err");
  if(password.value == confirm.value && password.value.length!==0) {
    confirm.style.border ="1px solid  #ffd81f";
    spanConf.innerHTML = "";
    ok.push("Password: " + password.value);
  } else {
    confirm.style.border = "2px solid #ffd81f";
    spanConf.innerHTML = "Phew! A good jedi must be patient! Your passwords are not matching.";
  }
  goodJob(ok);
}

function goodJob(correct) {
  var template = '';
  correct.forEach(function(input) {
    template += '<p class="input">' + input + '</p><br/>'
  });
  console.log(template);
  document.querySelector("#validacija").innerHTML = template;
}
