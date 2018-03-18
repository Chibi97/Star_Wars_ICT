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

    {
      img  : "/images/gallery/19.jpg",
      dataTitle : "Meeting",
      imgS : "images/gallery/19_s.jpg",
      movie : "RO"
    },

    {
      img  : "/images/gallery/20.jpg",
      dataTitle : "Galn with team workers",
      imgS : "images/gallery/20_s.jpg",
      movie : "RO"
    },

    {
      img  : "/images/gallery/21.jpg",
      dataTitle : "Tarkin",
      imgS : "images/gallery/21_s.jpg",
      movie : "RO"
    },

    {
      img  : "/images/gallery/22.jpg",
      dataTitle : "Jyn",
      imgS : "images/gallery/22_s.jpg",
      movie : "RO"
    },

    {
      img  : "/images/gallery/23.jpg",
      dataTitle : "Last hug",
      imgS : "images/gallery/23_s.jpg",
      movie : "RO"
    },

    {
      img  : "/images/gallery/24.jpg",
      dataTitle : "Jyn and Cassian",
      imgS : "images/gallery/24_s.jpg",
      movie : "RO"
    },

    {
      img  : "/images/gallery/25.jpg",
      dataTitle : "Yavin 4",
      imgS : "images/gallery/25_s.jpg",
      movie : "RO"
    },

    {
      img  : "/images/gallery/26.jpg",
      dataTitle : "Anakin and Palpatine",
      imgS : "images/gallery/26_s.jpg",
      movie : "ROTS"
    },

    {
      img  : "/images/gallery/27.jpg",
      dataTitle : "Anakin and Obi-Wan",
      imgS : "images/gallery/27_s.jpg",
      movie : "ROTS"
    },

    {
      img  : "/images/gallery/28.jpg",
      dataTitle : "Obi-Wan and Yoda",
      imgS : "images/gallery/28_s.jpg",
      movie : "ROTS"
    },

    {
      img  : "/images/gallery/29.jpg",
      dataTitle : "Palpatine vs Made Windu",
      imgS : "images/gallery/29_s.jpg",
      movie : "ROTS"
    },

    {
      img  : "/images/gallery/30.jpg",
      dataTitle : "Yoda fighting",
      imgS : "images/gallery/30_s.jpg",
      movie : "ROTS"
    },

    {
      img  : "/images/gallery/31.jpg",
      dataTitle : "Birth of Luke and Leia",
      imgS : "images/gallery/31_s.jpg",
      movie : "ROTS"
    },

    {
      img  : "/images/gallery/32.jpg",
      dataTitle : "Anakin vs Obi-Wan",
      imgS : "images/gallery/32_s.jpg",
      movie : "ROTS"
    },

    {
      img  : "/images/gallery/33.jpg",
      dataTitle : "Vader and Sidious watching over Deathstar",
      imgS : "images/gallery/33_s.jpg",
      movie : "ROTS"
    },

    {
      img  : "/images/gallery/34.jpg",
      dataTitle : "Anakin meets Padme",
      imgS : "images/gallery/34_s.jpg",
      movie : "AOTC"
    },

    {
      img  : "/images/gallery/35.jpg",
      dataTitle : "Obi-Wan and Boba Fett",
      imgS : "images/gallery/35_s.jpg",
      movie : "AOTC"
    },

    {
      img  : "/images/gallery/36.jpg",
      dataTitle : "Padme and Anakin",
      imgS : "images/gallery/36_s.jpg",
      movie : "AOTC"
    },

    {
      img  : "/images/gallery/37.jpg",
      dataTitle : "Coucil",
      imgS : "images/gallery/37_s.jpg",
      movie : "AOTC"
    },

    {
      img  : "/images/gallery/38.jpg",
      dataTitle : "Captured in the arena",
      imgS : "images/gallery/38_s.jpg",
      movie : "AOTC"
    },

    {
      img  : "/images/gallery/39.jpg",
      dataTitle : "Fight",
      imgS : "images/gallery/39_s.jpg",
      movie : "AOTC"
    },

    {
      img  : "/images/gallery/40.jpg",
      dataTitle : "Republic assault ship",
      imgS : "images/gallery/40_s.jpg",
      movie : "AOTC"
    },

    {
      img  : "/images/gallery/41.jpg",
      dataTitle : "Wedding",
      imgS : "images/gallery/41_s.jpg",
      movie : "AOTC"
    },

    {
      img  : "/images/gallery/42.jpg",
      dataTitle : "Qui-Gon, Padme and Jar Jar",
      imgS : "images/gallery/42_s.jpg",
      movie : "TPM"
    },

    {
      img  : "/images/gallery/43.jpg",
      dataTitle : "Dinner with little Anakin",
      imgS : "images/gallery/43_s.jpg",
      movie : "TPM"
    },

    {
      img  : "/images/gallery/44.jpg",
      dataTitle : "Qui-Gon vs Darth Maul",
      imgS : "images/gallery/44_s.jpg",
      movie : "TPM"
    },

    {
      img  : "/images/gallery/45.jpg",
      dataTitle : "Senate meeting",
      imgS : "images/gallery/45_s.jpg",
      movie : "TPM"
    },

    {
      img  : "/images/gallery/46.jpg",
      dataTitle : "Darth Maul",
      imgS : "images/gallery/46_s.jpg",
      movie : "TPM"
    },

    {
      img  : "/images/gallery/47.jpg",
      dataTitle : "Trade Federation explodes",
      imgS : "images/gallery/47_s.jpg",
      movie : "TPM"
    },

    {
      img  : "/images/gallery/48.jpg",
      dataTitle : "Darth Sidious",
      imgS : "images/gallery/48_s.jpg",
      movie : "ROTJ"
    },

    {
      img  : "/images/gallery/49.jpg",
      dataTitle : "Obi-Wan and Luke",
      imgS : "images/gallery/49_s.jpg",
      movie : "ROTJ"
    },

    {
      img  : "/images/gallery/50.jpg",
      dataTitle : "Chewie, Han, Leia, Luke, C3PO and R2D2",
      imgS : "images/gallery/50_s.jpg",
      movie : "ROTJ"
    },

    {
      img  : "/images/gallery/51.jpg",
      dataTitle : "Luke and Han",
      imgS : "images/gallery/51_s.jpg",
      movie : "ROTJ"
    },

    {
      img  : "/images/gallery/52.jpg",
      dataTitle : "Darth Vader and Luke",
      imgS : "images/gallery/52_s.jpg",
      movie : "ROTJ"
    },

    {
      img  : "/images/gallery/53.jpg",
      dataTitle : "Lando",
      imgS : "images/gallery/53_s.jpg",
      movie : "ROTJ"
    },

    {
      img  : "/images/gallery/54.jpg",
      dataTitle : "Han Solo",
      imgS : "images/gallery/54_s.jpg",
      movie : "ROTJ"
    },

    {
      img  : "/images/gallery/55.jpg",
      dataTitle : "Darth Vader without mask",
      imgS : "images/gallery/55_s.jpg",
      movie : "ROTJ"
    },

    {
      img  : "/images/gallery/56.jpg",
      dataTitle : "Jedi Masters on the other side",
      imgS : "images/gallery/56_s.jpg",
      movie : "ROTJ"
    },

    {
      img  : "/images/gallery/57.jpg",
      dataTitle : "Discovering a droid near the base",
      imgS : "images/gallery/57_s.jpg",
      movie : "TESB"
    },

    {
      img  : "/images/gallery/58.jpg",
      dataTitle : "Empires' walkers",
      imgS : "images/gallery/58_s.jpg",
      movie : "TESB"
    },

    {
      img  : "/images/gallery/59.jpg",
      dataTitle : "Luke as a pilot",
      imgS : "images/gallery/59_s.jpg",
      movie : "TESB"
    },

    {
      img  : "/images/gallery/60.jpg",
      dataTitle : "Master Yoda",
      imgS : "images/gallery/60_s.jpg",
      movie : "TESB"
    },

    {
      img  : "/images/gallery/61.jpg",
      dataTitle : "Darth Vader and Darth Sidious",
      imgS : "images/gallery/61_s.jpg",
      movie : "TESB"
    },

    {
      img  : "/images/gallery/62.jpg",
      dataTitle : "Leia and Han",
      imgS : "images/gallery/62_s.jpg",
      movie : "TESB"
    },

    {
      img  : "/images/gallery/63.jpg",
      dataTitle : "Han vs Darth Vader",
      imgS : "images/gallery/63_s.jpg",
      movie : "TESB"
    },

    {
      img  : "/images/gallery/64.jpg",
      dataTitle : "The group is captures by Vader",
      imgS : "images/gallery/64_s.jpg",
      movie : "TESB"
    },

    {
      img  : "/images/gallery/65.jpg",
      dataTitle : "Vader vs Luke",
      imgS : "images/gallery/65_s.jpg",
      movie : "TESB"
    },

    {
      img  : "/images/gallery/66.jpg",
      dataTitle : "Chewbacca and Lando",
      imgS : "images/gallery/66_s.jpg",
      movie : "TESB"
    },

    {
      img  : "/images/gallery/67.jpg",
      dataTitle : "Watching Falcon depart",
      imgS : "images/gallery/67_s.jpg",
      movie : "TESB"
    },

    {
      img  : "/images/gallery/68.jpg",
      dataTitle : "Leia gives R2D2 a video message",
      imgS : "images/gallery/68_s.jpg",
      movie : "ANH"
    },

    {
      img  : "/images/gallery/69.jpg",
      dataTitle : "Darth Vader and an officer",
      imgS : "images/gallery/69_s.jpg",
      movie : "ANH"
    },

    {
      img  : "/images/gallery/70.jpg",
      dataTitle : "Luke Skywalker",
      imgS : "images/gallery/70_s.jpg",
      movie : "ANH"
    },

    {
      img  : "/images/gallery/71.jpg",
      dataTitle : "\" Help me Obi-Wan Kenobi, you are my only hope...\"",
      imgS : "images/gallery/71_s.jpg",
      movie : "ANH"
    },

    {
      img  : "/images/gallery/72.jpg",
      dataTitle : "Tarkin, Leia and Vader",
      imgS : "images/gallery/72_s.jpg",
      movie : "ANH"
    },

    {
      img  : "/images/gallery/73.jpg",
      dataTitle : "Han and Luke as stormtroopers",
      imgS : "images/gallery/73_s.jpg",
      movie : "ANH"
    },

    {
      img  : "/images/gallery/74.jpg",
      dataTitle : "Obi-Wan Kenobi deactivating tracktor beam",
      imgS : "images/gallery/74_s.jpg",
      movie : "ANH"
    },

    {
      img  : "/images/gallery/75.jpg",
      dataTitle : "Obi-Wan vs Darth Vader",
      imgS : "images/gallery/75_s.jpg",
      movie : "ANH"
    },

    {
      img  : "/images/gallery/76.jpg",
      dataTitle : "Pilots",
      imgS : "images/gallery/76_s.jpg",
      movie : "ANH"
    },

    {
      img  : "/images/gallery/77.jpg",
      dataTitle : "Han Solo and Luke as a pilot",
      imgS : "images/gallery/77_s.jpg",
      movie : "ANH"
    },

    {
      img  : "/images/gallery/78.jpg",
      dataTitle : "Leia and officers in the control room",
      imgS : "images/gallery/78_s.jpg",
      movie : "ANH"
    },

    {
      img  : "/images/gallery/79.jpg",
      dataTitle : "Deathstar and Millenium Falcon",
      imgS : "images/gallery/79_s.jpg",
      movie : "ANH"
    },

    {
      img  : "/images/gallery/80.jpg",
      dataTitle : "Celebration",
      imgS : "images/gallery/80_s.jpg",
      movie : "ANH"
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
}
