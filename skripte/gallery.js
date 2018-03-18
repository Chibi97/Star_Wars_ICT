$(document).ready(function() {
  var imgs = [
    {
      img  : "/images/gallery/1.jpg",
      dataTitle : "Ray and Luke",
      imgS : "images/gallery/1_s.jpg",
      movie : "LJ"
    },

    {
      img  : "/images/gallery/2.jpg",
      dataTitle : "Porg",
      imgS : "images/gallery/2_s.jpg",
      movie : "LJ"
    },

    {
      img  : "/images/gallery/3.jpg",
      dataTitle : "Luke Skywalker",
      imgS : "images/gallery/3_s.jpg",
      movie : "LJ"
    },

    {
      img  : "/images/gallery/4.jpg",
      dataTitle : "Kylo Ren",
      imgS : "images/gallery/4_s.jpg",
      movie : "LJ"
    },

    {
      img  : "/images/gallery/5.jpg",
      dataTitle : "Finn and Rose",
      imgS : "images/gallery/5_s.jpg",
      movie : "LJ"
    },

    {
      img  : "/images/gallery/6.jpg",
      dataTitle : "Finn vs Phasma",
      imgS : "images/gallery/6_s.jpg",
      movie : "LJ"
    },

    {
      img  : "/images/gallery/7.jpg",
      dataTitle : "Leia Organa",
      imgS : "images/gallery/7_s.jpg",
      movie : "RO"
    },

    {
      img  : "/images/gallery/8.jpg",
      dataTitle : "Snoke's personal red guard",
      imgS : "images/gallery/8_s.jpg",
      movie : "LJ"
    },

    {
      img  : "/images/gallery/9.jpg",
      dataTitle : "Battle",
      imgS : "images/gallery/9_s.jpg",
      movie : "TFA"
    }
  ];
  popuniDDL();
  napraviSve(imgs);
  $("#prepand select").change(function() {
    filter(imgs);
  });
});

function napraviJednog(obj,i) {
  // parametar niz[obj]
  var template = "<a href='" + obj.img +
    "' data-lightbox='galerija'" +
    "data-title='" + obj.dataTitle +
    "'><img src='" + obj.imgS +
    "' alt='slika" + (i+1) + "'/></a>";
    return template;
}

function napraviSve(niz) {
  var gallery = $(".gallery");
  gallery.html("");
  niz.forEach(function(obj, i) {
    var jedan = $(napraviJednog(obj, i));
    gallery.append(jedan);
  })
}

function popuniDDL() {
  var select = $("#prepand select");
  var opt = ["All", "The Last Jedi", "The Force Awakens","Rogue One","Revenge of the Sith", "Attack of the Clones", "Phantom Menace","Return of The Jedi", "The Empire Strikes Back", "New Hope"];
  $.each(opt, function(i, elem) {
    var option = $("<option>").text(elem);
    option.attr("value", elem);
    select.append(option);
  });
}

function filter(array) {
  console.log(array);
  var zaIscrtavanje = [];
  var selektovani;
  if($("select").val() == "All") {
    selektovani = "all";
  } 


}
