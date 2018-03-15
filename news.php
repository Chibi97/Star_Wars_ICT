<!DOCTYPE html>
<html>
  <head>
    <title>STAR WARS | News</title>
    <meta charset="utf-8">
    <meta name="keywords" content="star wars, the last jedi, force of sound, mark hamill, walk of fame, crystal fox cookie, visual dictionary, importance of teaching, bomber, mirror cave, new solo, kylo ren, meaning of mask, book, comic, movie, franchise, icons of galaxy,  news, gain, rights, password, sign"/>
    <meta name="description" content="Interested in the events that evolve SW universe? Join us and read many interesting articles!"/>
    <meta name="author" content="mailto:olja.ivkovic.34.16@ict.edu.rs"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="shortcut icon" href="images/dvfavicon.ico" >
    <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
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
            <a href="/gallery.php">Gallery</a>
          </li>
          <li>
            <a href="/news.php">Current news</a>
          </li>
          <li>
            <a href="/author.php">Author</a>
          </li>
          <li>
            <a href="/starwars.pdf">Documentation</a>
          </li>
          <li>
            <button class="log-reg">sign in / up</button>
          </li>
        </ul>
        <button class="far fa-times-circle" id="x"></button>
      </nav>
      <section class="stars stars-extended">
        <div class="news-wrapper">

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

          <div id="disclaimer">
            <p>Design by &copy; Olja Ivković<br/>
         This site is a project for ICT College, made for educational purposes. I don't intend to profit nor gain any rights. All rights go to their rightful owners. </p>
         </div>
       </div>
    </div>
    </footer>


    <div class='login-modal'>
      <span id="close">&times;</span>
      <div class='modal-col'>
        <h1>sign in</h1>
        <form>
          <label>Email</label>
          <input type="text" placeholder="Email" class="email" />
          <span class="error email-err"></span>
          <label>Password</label>
          <input type="password" placeholder="Password" class="password" />
          <span class="error password-err"></span>
          <button class="submitSI">Sign in</button>
        </form>
        <div id="validacija">

        </div>
      </div>
      <div class="modal-col">
        <h1>sign up</h1>
        <form>
          <label>Name and lastname</label>
          <input type="text" placeholder="Name and last name" class="fnln"/>
          <span class="error fnln-err"></span>
          <label>Student ID</label>
          <input type="text" placeholder="Index/Year" class="index"/>
          <span class="error index-err"></span>
          <label>Password</label>
          <input type="password" placeholder="Password" class="passwordSU"/>
          <span class="error passwordSU-err"></span>
          <label>Password Confirmation</label>
          <input type="password" placeholder="Password" class="confirm" />
          <span class="error confirm-err"></span>
          <button class="submitSU">Sign up</button>
        </form>
      </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="skripte/sajt.js"></script>
    <script src="skripte/vesti.js"></script>
  </body>
</html>
