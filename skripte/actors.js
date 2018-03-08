$(document).ready(function() {
  $.ajax({
    url: "podaci/actors.json",
    type:"get",
    dataType:"json",
    success: function(data) {
      var trenutna = 0;
      var kol = proveriWindow();
      actorsSlide(data, trenutna, kol);
      var animating = false;

      $(window).resize(function() {
        kol = proveriWindow();
        actorsSlide(data, trenutna, kol);
      });
      $(".next").click(function() {
        if(animating) return;
        animating = true;
        trenutna += kol;
        $(".actors").find(".actor").fadeOut(1000, function() {
          actorsSlide(data, trenutna, kol);
          setTimeout(function() {animating = false}, 1000);
        });
      });
      $(".prev").click(function() {
        if(animating) return;
        animating = true;
        trenutna -= kol;
        $(".actors").find(".actor").fadeOut(1000, function() {
          actorsSlide(data, trenutna, kol);
          setTimeout(function() {animating = false}, 1000);
        });
      });
    }
  });
});

function proveriWindow() {
  var w = $(this).width();
  var kol;
  var f = true;

  if(w < 820) {
    kol = 3;
    f = false;
  }
  if(w < 660) {
    kol = 2;
    f = false;
  }

  if(w < 500) {
    kol = 1;
    f = false;
  }

  if(f) {
    kol = 4;
  }
  return kol;
}

function actorsSlide(actors, od, koliko) {
  $(".actors").find(".actor").remove();

  // actors -4 0
  if(od < 0) {
    $(".prev").attr('disabled', true);
    od = 0;
  } else {
    $(".prev").removeAttr('disabled');
  }

  $(".next").removeAttr('disabled');
  for(var i=od; i<od+koliko; i++) {
    if(actors[i]) {
      actorTemplate(actors[i]).hide().appendTo(".actors");
    } else {
      $(".next").attr("disabled", true);
    }
  }

  $(".actors").find(".actor").fadeIn(1000);
  var posl = $(".actor:last-child");
  $(".next").detach().insertAfter( posl );
}

function actorTemplate(actor) {
  var template = '<article class="actor">' +
    '<img alt="'+ actor.image.alt + '" src="' + actor.image.src + '"/>' +
    '<h2>'+ actor.name +'</h2>'+
    '<p>'+ actor.role +'</p>'+
    '</article>';
    return $(template);
}
