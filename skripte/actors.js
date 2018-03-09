$(document).ready(function() {
  $.ajax({
    url: "podaci/actors.json",
    type:"get",
    dataType:"json",
    success: function(data) {
      var start = 0;
      var kol = proveriWindow();
      // trenutni "od" je nula, kol je onoliko koliko konstantuje metoda proveriWindow
      actorsSlide(data, start, kol); // inicijalno iscrtavanje prvih 4
      var animating = false; // nijedna animacija nije u toku

      $(window).resize(function() {
        kol = proveriWindow();
        actorsSlide(data, start, kol);
        // za svaki resize kol dobija novu vrednost, i ta vrednost se prosledjuje i odmah se iscrta manji/veci broj actora
      });

      $(".next").click(function() {
        if(animating) return;
        // ne dozvoljavamo da vise klikova prouzrukuje prerani zavrsetak svih akcija koje treba da se dese. Ako je neka animacija u toku (ani = true), odmah se izlazi iz funckije.
        animating = true;
        start += kol; // na svaki klik "od" ce uzimati vrednost prethodnog uslova za break petlje. (kreni od 0, idi do 0+4, kreni od 4 idi do 4+4)
        $(".actors").find(".actor").fadeOut(1000, function() {
          actorsSlide(data, start, kol);
          setTimeout(function() {animating = false}, 1000);
          // fadeOut-ujemo trenutne iscrtane, i onda posle 2s kazemo da se animacija zavrsila sto znaci da moze se ponovo kliknuti
        });
      });
      $(".prev").click(function() {
        if(animating) return;
        animating = true;
        start -= kol;
        // ako zelimo unazad da idemo, "od" treba da bude od-koliko
        // iscrtani su npr 4-8, na klik previous idi od =4-4 = 0, do od+koliko=4
        $(".actors").find(".actor").fadeOut(1000, function() {
          actorsSlide(data, start, kol);
          // fadeOut-ujemo trenutne iscrtane i onda posle 2s kazemo da je gotova animacija
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
  // sve appendovane actore skloni pre iscrtavanja novih

  if(od == 0) {
    $(".prev").attr("disabled", true);
    od = 0;
    // ako je od==0, znaci da ne sme dalje unazad da ide.. disable-ujemo previous dugme i postavljamo opet od na nulu
  } else {
    $(".prev").removeAttr("disabled");
    // ako je bilo koji veci broj, treba dozvoliti upotrebu previous dugmeta
  }

  $(".next").removeAttr('disabled');
  // skloniti disabled za "next" na pocetku funkcije
  for(var i=od; i<od+koliko; i++) {
    if(actors[i]) { // da li je dosao do kraja JSON-a, ako nije isctraj
      actorTemplate(actors[i]).hide().appendTo(".actors");
      // iscrtati jednog, sakriga ga i appenduj u container
    } else {
      $(".next").attr("disabled", true);
     // actors[26] --> undefined --> false pa kad nema sta da iscrta treba da disable-uje next dugme.
    }
  }

  $(".actors").find(".actor").fadeIn(1000);
  // posto smo fadeOut-ovali trenutne, svi novi koji su sakriveni u petlji treba ovde da se prikazu uz efekat fadeIn
  var posl = $(".actor:last-child");
  $(".next").detach().insertAfter(posl);
  // resavam nastali problem flexboxa: next button treba da izdvoji gde god da se nalazi, i da ga stavi nakon poslednjeg actora
}

function actorTemplate(actor) {
  var template = '<article class="actor">' +
    '<img alt="'+ actor.image.alt + '" src="' + actor.image.src + '"/>' +
    '<h2>'+ actor.name +'</h2>'+
    '<p>'+ actor.role +'</p>'+
    '</article>';
    return $(template);
}
