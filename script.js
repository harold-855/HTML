// ===============================
// MENSAJE DE BIENVENIDA
// ===============================

// Se ejecuta cuando carga la página
window.addEventListener("load", function () {
    alert("👋 Bienvenido a mi portafolio");
});


// ===============================
// CAMBIAR TEXTO DE UN PÁRRAFO
// ===============================

// seleccionamos elementos
const botonCambiar = document.getElementById("cambiarTexto");
const mensaje = document.getElementById("mensaje");

// verificamos que existan (buena práctica)
if (botonCambiar && mensaje) {
    botonCambiar.addEventListener("click", function () {
        mensaje.textContent = "🚀 El texto ha sido cambiado con JavaScript";
    });
}


// ===============================
// MOSTRAR / OCULTAR CONTENIDO
// ===============================

const botonToggle = document.getElementById("toggle");
const contenidoExtra = document.getElementById("extra");

if (botonToggle && contenidoExtra) {
    botonToggle.addEventListener("click", function () {

        // alterna visibilidad
        if (contenidoExtra.style.display === "none") {
            contenidoExtra.style.display = "block";
        } else {
            contenidoExtra.style.display = "none";
        }

    });
}


// ===============================
// EFECTO DINÁMICO EN BOTÓN
// ===============================

// todos los botones
const botones = document.querySelectorAll("button");

botones.forEach(function (btn) {
    btn.addEventListener("click", function () {

        // efecto visual rápido
        btn.style.transform = "scale(0.95)";

        setTimeout(function () {
            btn.style.transform = "scale(1)";
        }, 150);

    });
});