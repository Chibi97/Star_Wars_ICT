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
      movie : "LJ"
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
      movie : "LJ"
    },

    {
      img  : "/images/gallery/10.jpg",
      dataTitle : "Han and Chewie",
      imgS : "images/gallery/10_s.jpg",
      movie : "TFA"
    },

    {
      img  : "/images/gallery/11.jpg",
      dataTitle : "Stormtroopers",
      imgS : "images/gallery/11_s.jpg",
      movie : "TFA"
    },

    {
      img  : "/images/gallery/12.jpg",
      dataTitle : "Rey, Finn and BB-8",
      imgS : "images/gallery/12_s.jpg",
      movie : "TFA"
    },

    {
      img  : "/images/gallery/13.jpg",
      dataTitle : "Darth Vader's helmet",
      imgS : "images/gallery/13_s.jpg",
      movie : "TFA"
    },

    {
      img  : "/images/gallery/14.jpg",
      dataTitle : "Map to Luke",
      imgS : "images/gallery/14_s.jpg",
      movie : "TFA"
    },

    {
      img  : "/images/gallery/15.jpg",
      dataTitle : "Han and Ben Solo",
      imgS : "images/gallery/15_s.jpg",
      movie : "TFA"
    },

    {
      img  : "/images/gallery/16.jpg",
      dataTitle : "Leia and Han",
      imgS : "images/gallery/16_s.jpg",
      movie : "TFA"
    },

    {
      img  : "/images/gallery/17.jpg",
      dataTitle : "Poe and BB-8",
      imgS : "images/gallery/17_s.jpg",
      movie : "TFA"
    },

    {
      img  : "/images/gallery/18.jpg",
      dataTitle : "Finn vs Kylo",
      imgS : "images/gallery/18_s.jpg",
      movie : "TFA"
    },
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
