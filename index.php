<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Star Wars</title>
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- TODO: jos meta tagova! -->
    <link rel="shortcut icon" href="images/dvfavicon.ico" >
    <link href="https://fonts.googleapis.com/css?family=Francois+One|Inconsolata|Lobster|Raleway|Dosis:700" rel="stylesheet">
    <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
  </head>
  <body>
    <header>
      <button class="fas fa-bars" id="sandwich"></button>
      <nav class="gl-meni">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">Gallery</a>
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
        <div class="logo">
          <img alt="logo" src="images/logo.png"/>
          <h1>long time ago, in a galaxy far, far away...</h1>
        </div>
      </section>
    </header>

    <div class="wrapper">
      <hr />
      <section class="actors">
        <h1 class="heading">Actors</h1>
        <button class="fas fa-chevron-left prev"></button>
        <article class="actor">
          <img alt="prvi" src="images/harrison.jpg"/>
          <h2>Harrison Ford</h2>
          <p>Han Solo</p>
        </article>

        <article class="actor">
          <img alt="prvi" src="images/mark.jpg"/>
          <h2>Mark Hamill</h2>
          <p>Luke Skywalker</p>
        </article>

        <article class="actor">
          <img alt="prvi" src="images/carrie.jpg"/>
          <h2>Carrie Fisher</h2>
          <p>Leia Organa</p>
        </article>

        <article class="actor">
          <img alt="prvi" src="images/daisy.jpg"/>
          <h2>Daisy Ridley</h2>
          <p>Ray</p>
        </article>
        <button class="fas fa-chevron-right next"></button>
      </section>

      <hr />
      <div class="news-wrapper">
      <h1 class="heading">Latest news</h1>
        <section class="col left">
          <article>
            <img src="images/news1-large.jpg" alt="news1 img"/>
            <h2>5 THINGS WE LEARNED FROM THE FORCE OF SOUND</h2>
            <p>
              ABC News Features recently pulled back the curtain on the dedicated team at Skywalker Sound for an in-depth look at the subtle nuances and surprisingly normal tools that blend together to enrich the Star Wars galaxy (There are spoilers ahead in both the video and our breakdown, so proceed with caution).
            </p>
          </article>
        </section>

        <section class="col right">
          <article class="news">
            <img src="images/news1.jpg" alt="news2 img"/>
            <h2>5 THINGS WE LEARNED FROM THE FORCE OF SOUND</h2>
          </article>

          <article class="news">
            <img src="images/news1.jpg" alt="news3 img"/>
            <h2>5 THINGS WE LEARNED FROM THE FORCE OF SOUND</h2>
          </article>

          <article class="news">
            <img src="images/news1.jpg" alt="news4 img"/>
            <h2>5 THINGS WE LEARNED FROM THE FORCE OF SOUND</h2>
          </article>
        </section>
      </div>
    </div>

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
    <script src="sajt.js"></script>
  </body>
</html>