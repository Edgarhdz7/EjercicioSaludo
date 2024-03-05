document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('cambiarNombreBtn').addEventListener('click', function() {
        let nombre = prompt("¿Cuál es tu nombre?");
        if (nombre != null) {
            document.getElementById("saludo").textContent = "¡Hola " + nombre + "!";
        }
    });
});


