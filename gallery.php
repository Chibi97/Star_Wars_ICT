<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Star Wars | Gallery</title>
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- TODO: jos meta tagova! -->
    <link rel="shortcut icon" href="images/dvfavicon.ico" >
    <link href="https://fonts.googleapis.com/css?family=Francois+One|Inconsolata|Lobster|Raleway|Dosis:700" rel="stylesheet">
    <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
    <link href="/vendor/lightbox/lightbox.min.css" rel="stylesheet">
  </head>
  <body>
    <header>
      <button class="fas fa-bars" id="sandwich"></button>
      <nav class="gl-meni">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="/gallery.php">Gallery</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Author</a>
          </li>
          <li>
            <a href="#">Documentation</a>
          </li>
          <li>
            <button class="log-reg">sign in / up</button>
          </li>
        </ul>
        <button class="far fa-times-circle" id="x"></button>
      </nav>
      <section class="stars">
        <div class="gallery">
          <a href='/images/primer.jpg' data-lightbox="galerija" data-title="Moj Naslov 1">
            <img src="/images/primer.jpg" />
          </a>
          <a href='/images/primer.jpg' data-lightbox="galerija" data-title="Moj Naslov 2">
            <img src="/images/primer.jpg" />
          </a>
          <a href='/images/primer.jpg' data-lightbox="galerija" data-title="Moj Naslov 3">
            <img src="/images/primer.jpg" />
          </a>
          <a href='/images/primer.jpg' data-lightbox="galerija" data-title="Moj Naslov 4">
            <img src="/images/primer.jpg" />
          </a>
          <a href='/images/primer.jpg' data-lightbox="galerija" data-title="Moj Naslov 5">
            <img src="/images/primer.jpg" />
          </a>
          <a href='/images/primer.jpg' data-lightbox="galerija" data-title="Moj Naslov 6">
            <img src="/images/primer.jpg" />
          </a>
        </div>
      </section>
    </header>

    <footer>
      <div class="wrapper">
        <div id="cto">
          <a href="https://www.facebook.com/StarWars" class="fab fa-facebook" target="_blank"></a>
          <a href="https://twitter.com/starwars" class="fab fa-twitter" target="_blank"></a>
          <a href="https://www.instagram.com/starwars/" class="fab fa-instagram" target="_blank"></a>
          <a href="https://www.youtube.com/user/starwars" class="fab fa-youtube" target="_blank"></a>
          <a href="http://www.imdb.com/title/tt2527336/" class="fab fa-imdb" target="_blank"></a>
          <a href="https://starwars.tumblr.com/" class="fab fa-tumblr" target="_blank"></a>
        </div>
      </div>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="/vendor/lightbox/lightbox.min.js"></script>
    <script src="skripte/sajt.js"></script>
  </body>
</html>
