$(document).ready(function() {
  var active = getParameterByName("news_id") || 1;

  $.ajax({
    type: 'get',
    url: '/podaci/news' + active + '.json',
    success: function(data) {
      console.log(data);
      var elem = newsTemplate(data);
      $(".news-wrapper").html(elem);
    }
  })
});

function newsTemplate(data) {
  return $("<div class='news-wrapper'>" +
    "<img src='images/news/news1_1.jpg' />" +
    "<h1 class='news-header'>5 THINGS WE LEARNED FROM “THE FORCE OF SOUND</h1>" +
      makeNewsContent(data) +
    "</div>");
}

function makeNewsContent(data) {
  var html = "";
  var imageIndex = 1;
  var pIndex = 0;
  data.content.forEach(function(paragraph, index) {
    if((index+1)%2==0 && imageIndex < data.images.length) {
      var img = data.images[imageIndex];
      html += "<img src='" + img.src + "' alt='" + img.alt +"' />";
      imageIndex++;
    }
    html += "<p class='news-parag'>" + paragraph + "</p>";
  });
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
