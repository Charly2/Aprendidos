var page = require('page');
var yo = require('yo-yo');
var web = document.getElementById('website');
/*
//Write to page
page('*', home);
page('/profile', profile);
page('/profile/changepassword', reset);

page('/nosotros', nosotros);
page('/prensa', prensa);
page('/terminos-y-condiciones', terminos);
page('/preguntas-frecuentes', preguntas);
page('/plataforma', plataforma);


function home(ctx, next) {
	next();
}

function profile(ctx, next) {
	next();
}

function reset(ctx, next) {
	next();
}

function nosotros(ctx, next) {
	$(".container__Menu .ul li:first-child").addClass('selectItemMenu');
	$(".container__Menu .ul li:last-child").removeClass('selectItemMenu');
	
	var main = $("#website");
	var theme = yo`<div><section class="slider aboutSlider">
        <header class="aboutSlider__Header">
          <h2 class="title">¿QUIÉNES SOMOS?</h2>
        </header>
      </section>
      <main class="main">
        <div class="aboutMain">
          <div class="container">
            <div class="col l12 aboutMain__Description">
              <p class="description">Somos un equipo de personas que creemos en la educación de calidad y en que todos aprenden de formas diferentes. Sabemos que la educación es el arma más poderosa para cambiar al mundo y por eso decidimos crear este sitio. Queremos ayudar a las personas a encontrar profesores de cualquier materia y área de estudio, facilitando el proceso de selección de acuerdo a las necesidades de cada alumno.</p>
            </div>
          </div>
        </div>
        <div class="aboutMain bgProfiles">
          <div class="container">
            <div class="row">
              <div class="col l12 aboutMain__Profiles">
                <article class="profiles__Articl col l5 col m5">
                  <figure class="profiles__Articl--Figure"><img src="/img/Axel-Web_1.jpg" class="img1"/><img src="/img/Axel-Web_2.jpg" class="img2"/></figure>
                  <header class="profiles__Articl--Header">
                    <h3 class="title">Alex Collazos</h3>
                  </header>
                  <div class="profiles__Articl--Ocupation"><span class="ocupation">Co-Founder</span></div>
                </article>
                <div class="col l2 col m2"></div>
                <article class="profiles__Articl col l5 col m5">
                  <figure class="profiles__Articl--Figure"><img src="/img/Vale-web_1.jpg" class="img1"/><img src="/img/Vale-web_2.jpg" class="img2"/></figure>
                  <header class="profiles__Articl--Header">
                    <h3 class="title">Vale Angeleri</h3>
                  </header>
                  <div class="profiles__Articl--Ocupation"><span class="ocupation">Co-Founder</span></div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div class="aboutMain">
          <div class="container">
            <div class="col l12 aboutMain__Description">
              <h4 class="show">Misión</h4>
              <p class="description">Nuestra misión es conectar alumnos con profesores particulares teniendo en cuenta los requerimientos de cada usuario. Uno elige qué, cuándo, cómo y con quién. Sabemos que encontrar un profesor particular nunca es fácil y que cada alumno es diferente, por eso son necesarios profesores que se ajusten a cada perfil. Aprendidos surge para solucionar el problema de miles de personas y otorgarle a los estudiantes la posibilidad de aprender con quienes ellos se sientan más cómodos.</p>
            </div>
          </div>
        </div>
        <div class="aboutMain__Footer">
          <div class="container">
            <div class="col l12 aboutMain__Description">
              <h4 class="show">Valores</h4>
              <p class="description">Trabajamos de forma dinámica, responsable y consciente de las necesidades de nuestros usuarios, como así también de los profesores que forman parte de nuestro sitio. </p>
            </div>
          </div>
        </div>
      </main></div>`;
    $(main).html(theme);

}

function prensa(ctx, next) {
  var main = $("#website");
  var theme = yo`<div><section class="slider prensaSlider">
        <header class="aboutSlider__Header">
          <h2 class="title">Prensa</h2>
        </header>
      </section>
      <main class="main">
        <div class="aboutMain">
          <div class="container">
            <div class="col l12 aboutMain__Description">
              <p class="description">Estamos trabajando...</p>
            </div>
          </div>
        </div>
      </main></div>`;
    $(main).html(theme);
}

function terminos(ctx, next){
	var main = $("#website");
	var theme = yo`
      <section class="slider terminosSlider">
        <header class="aboutSlider__Header">
          <h2 class="title">Términos y Condiciones</h2>
        </header>
      </section>
      <main class="main">
        <div class="aboutMain">
          <div class="container">
            <div class="col l12 aboutMain__Description">
              <p class="description">Estamos trabajando...</p>
            </div>
          </div>
        </div>
      </main>`;
    $(main).html(theme);
}

function preguntas(ctx, next){
	var main = $("#website");
	var theme = yo`
      <section class="slider preguntasSlider">
        <header class="aboutSlider__Header">
          <h2 class="title">Preguntas Frecuentes</h2>
        </header>
      </section>
      <main class="main">
        <div class="aboutMain">
          <div class="container">
            <div class="col l12 aboutMain__Description">
              <p class="description">Estamos trabajando...</p>
            </div>
          </div>
        </div>
      </main>`;
    $(main).html(theme);
}


function plataforma(ctx, next){
	var main = $("#website");
	var theme = yo`
      <section class="slider plataformaSlider">
        <header class="aboutSlider__Header">
          <h2 class="title">Plataforma</h2>
        </header>
      </section>
      <main class="main">
        <div class="aboutMain">
          <div class="container">
            <div class="col l12 aboutMain__Description">
              <p class="description">Estamos trabajando...</p>
            </div>
          </div>
        </div>
      </main>`;
    $(main).html(theme);
}

page(); */