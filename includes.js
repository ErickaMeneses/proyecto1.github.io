document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    header.innerHTML = `<h1>Búsqueda de Médicos</h1>
    <nav>
        <ul>
            <li><a href="inicioSesion.html">Login</a></li>
        </ul>
    </nav>`;
});


document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector("#menu");
    menu.innerHTML = '<div class="menu-secundario">' +
        '<a href="agendarcita.html">Agenda de citas</a>' +
        '<a href="medicos.html">Búsqueda de médicos</a>' +
        '<a href="sobrenosotros.html">Sobre nosotros</a>' +
        '<a href="servicios.html">Servicios</a>' +
        '<a href="informaciondecontacto.html">Información de contacto</a>' +
        '<a href="preguntasfrecuentes.html">Preguntas frecuentes</a>' +
        '<a href="politicasyterminos.html">Políticas de privacidad y términos de uso</a>' +
        '</div>';
});

document.addEventListener("DOMContentLoaded", function() {
    const footer = document.querySelector("footer");
    footer.innerHTML = '<p>Derechos de autor &copy; 2024 Clínica Árbol de Seda</p>';
});



function agregarLogo() {
    // Crea un nuevo elemento de imagen
    var logo = new Image();
    
    // Establece el origen de la imagen
    logo.src = "img/home.png";
    
    // Agrega un atributo de id a la imagen
    logo.id = "logo";
    
    // Agrega la imagen al cuerpo del documento
    document.body.appendChild(logo);
    
    // Agrega un event listener para el clic en la imagen
    logo.addEventListener('click', function() {
      // Redirige al usuario al index.html
      window.location.href = 'index.html';
    });
  }
  
  // Llama a la función para agregar el logo cuando el DOM esté completamente cargado
  document.addEventListener("DOMContentLoaded", function() {
    agregarLogo();
  });
  ;
  


