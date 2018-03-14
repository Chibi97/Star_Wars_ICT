$(document).ready(function() {
  dohvatiVesti();
});

var mouseInside = false;
function dohvatiVesti() {
  $.ajax({
    type: 'get',
    url: '/podaci/news_all.json',
    success: function(data) {
      var od     = 0;
      var koliko = 4;
      
      iscrtajVesti(od, koliko, data);

      setInterval(function() {
        $(".news-container article").fadeOut(600);
        setTimeout(function() {
          od += 4;
          if(od+koliko > data.length) {
            od = 0;
          }
          iscrtajVesti(od, koliko, data, true);
        }, 600);
      }, 5000);
    }
  })
}


function iscrtajVesti(od, koliko, data, shouldAnimate) {
  var animate = shouldAnimate || false;

  $(".news-container .left").html("");
  $(".news-container .right").html("");
  for(var i=od; i < od+koliko; i++) {
    var location;
    if(i == od) location = $(".news-container .left");
    else location = $(".news-container .right");

    var nova = $(jednaVest(data[i]));
    if(shouldAnimate) {
      nova.hide();
    }
    location.append(nova);
    if(shouldAnimate) {
      nova.fadeIn(600);
    }
  }
}

function jednaVest(json) {
  return `
    <article>
      <img src="${json.image.src}" alt="${json.image.alt}"/>
      <h2><a href="news.php?vest_id=${json.id}">${json.heading}</a></h2>
      <p>${ json.desc ? json.desc : "" }</p>
    </article>
  `;
}
