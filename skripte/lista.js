$(document).ready(function() {
  dohvatiVesti();
});

function dohvatiVesti() {
  $.ajax({
    type: 'get',
    url: '/podaci/news_all.json',
    success: function(data) {
      var od     = 0;
      var koliko = 4;
      var last = null;
      for(var i=od; i < od+koliko; i++) {
        var location;
        if(i == od) location = $(".news-container .left");
        else location = $(".news-container .right");

        var nova = $(jednaVest(data[i]));
        location.append(nova);
      }
    }
  })
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
