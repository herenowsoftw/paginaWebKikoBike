/*!
=========================================================
* JohnDoe Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

    
    // Fecha objetivo del temporizador (puedes cambiar esta fecha)
    const fechaObjetivo = new Date("2023-08-20").getTime();

    // Función para actualizar el temporizador
    function actualizarTemporizador() {
      const ahora = new Date().getTime();
      const tiempoRestante = fechaObjetivo - ahora;

      // Verificar si el temporizador ha finalizado
      if (tiempoRestante <= 0) {
        document.getElementById("temporizador").innerHTML = "¡Tiempo expirado!";
        // Aquí puedes agregar acciones a realizar cuando el temporizador finalice
      } else {
        // Calcular el tiempo restante en días, horas, minutos y segundos
        const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        // Mostrar el tiempo restante en el elemento con ID "temporizador"
        document.getElementById("temporizador").innerHTML = `Tiempo restante: ${dias}d ${horas}h ${minutos}m ${segundos}s`;
      }
    }

    // Actualizar el temporizador cada segundo (1000 milisegundos)
    setInterval(actualizarTemporizador, 1000);

    // Actualizar el temporizador inmediatamente al cargar la página
    actualizarTemporizador();
    
