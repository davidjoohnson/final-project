function actualizarReloj() {
    var fecha = new Date();
    var hora = formatoDosDigitos(fecha.getHours());
    var minutos = formatoDosDigitos(fecha.getMinutes());
    var segundos = formatoDosDigitos(fecha.getSeconds());

    document.getElementById("hora").textContent = hora;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

function formatoDosDigitos(valor) {
    return valor < 10 ? "0" + valor : valor;
}

setInterval(actualizarReloj, 1000);

// Cambiar color al hacer clic en el botón
var botonColor = document.getElementById("cambiarColor");
botonColor.addEventListener("click", function () {
    var letrasReloj = document.querySelectorAll(".reloj span");
    letrasReloj.forEach(function (letra) {
        var color = generarColorAleatorio();
        letra.style.color = color;
    });
});

function generarColorAleatorio() {
    var letras = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

