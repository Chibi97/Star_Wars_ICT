$(document).ready(function() {
  var active = getParameterByName("vest_id") || 1;
  var maxVesti = 12;

  $.ajax({
    type: 'get',
    url: '/podaci/news' + active + '.json',
    success: function(data) {
      var elem = newsTemplate(data);
      $(".news-wrapper").html(elem);
      var nextLink = $(`<a class='vest-link' href='/news.php?vest_id=${Number(active)+1}'>Next</a>`);
      var prevLink = $(`<a class='vest-link' href='/news.php?vest_id=${Number(active)-1}'>Previous</a>`);
      if(active > 1) {
        $(".news-wrapper").last().append(prevLink);
      }
      for(var i=1; i <= 12; i++) {
        $(".news-wrapper").last().append($(`<a class='vest-link' href='/news.php?vest_id=${i}'>${i}</a>`));
      }
      if(active < 12) {
        $(".news-wrapper").last().append(nextLink);
      }
    }
  })
});

function newsTemplate(data) {
  return $("<div class='news-wrapper'>" +
    "<img src='" + data.images[0].src + "' alt='" + data.images[0].alt + "' />" +
    "<h1 class='news-header'>" + data.heading + "</h1>" +
      makeNewsContent(data) +
    "</div>");
}

function makeNewsContent(data) {
  var html = "";
  var pIndex = 0;

  var slike  = data.images.slice(1, data.images.length);
  var pasusi = data.content;
  var br = 0;

  while(slike.length > 0 && pasusi.length > 0) {
    if(br%2==0) {
      var nextPasus = pasusi.shift(1);
      html += "<p class='news-parag'>" + nextPasus + "</p>";
    } else {
      var nextImage = slike.shift(1);
      html += "<img src='" + nextImage.src + "' alt='" + nextImage.alt + "' />";
    }
    br++;
  }

  while(slike.length > 0) {
    var nextImage = slike.shift(1);
    html += "<img src='" + nextImage.src + "' alt='" + nextImage.alt + "' />";
  }

  while(pasusi.length > 0) {
    var nextPasus = pasusi.shift(1);
    html += "<p class='news-parag'>" + nextPasus + "</p>";
  }

  return html;
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
