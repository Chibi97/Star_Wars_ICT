$(document).ready(function() {
  $.ajax({
    url: "podaci/actors.json",
    type:"get",
    dataType:"json",
    success: function(data) {
      var start = 0;
      var kol = proveriWindow();
      actorsSlide(data, start, kol);
      var animating = false;

      $(window).resize(function() {
        kol = proveriWindow();
        actorsSlide(data, start, kol);
      });

      $(".next").click(function() {
        if(animating) return;
        animating = true;
        start += kol;
        $(".actors").find(".actor").fadeOut(1000, function() {
          actorsSlide(data, start, kol);
          setTimeout(function() {animating = false}, 1000);
        });
      });
      $(".prev").click(function() {
        if(animating) return;
        animating = true;
        start -= kol;
        $(".actors").find(".actor").fadeOut(1000, function() {
          actorsSlide(data, start, kol);
          setTimeout(function() {animating = false}, 1000);
        });
      });
    }
  });
});

function proveriWindow() {
  var w = $(this).width();
  var kol;
  if(w < 500) {
    kol = 1;
  } else if (w < 660) {
    kol = 2
  } else if (w < 820) {
    kol = 3
  } else kol = 4;

  return kol;
}

function actorsSlide(actors, od, koliko) {
  $(".actors").find(".actor").remove();


  if(od == 0) {
    $(".prev").attr("disabled", true);
    od = 0;
  } else {
    $(".prev").removeAttr("disabled");
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
  $(".next").detach().insertAfter(posl);
}

function actorTemplate(actor) {
  var template = '<article class="actor">' +
    '<img alt="'+ actor.image.alt + '" src="' + actor.image.src + '"/>' +
    '<h2>'+ actor.name +'</h2>'+
    '<p>'+ actor.role +'</p>'+
    '</article>';
    return $(template);
}
