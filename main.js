var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var edit = document.getElementById("edit");

// Guardamos el código inicial para el botón "Reset"
var initialCode = textarea.value;

function drawCanvas() {
    try {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // eval ejecutará lo que esté escrito en el textarea
        eval(textarea.value);
    } catch (e) {
        console.error("Error en el código del canvas: ", e);
    }
}

// Eventos
reset.addEventListener("click", function () {
    textarea.value = initialCode;
    drawCanvas();
});

edit.addEventListener("click", function () {
    textarea.focus();
});

textarea.addEventListener("input", drawCanvas);

// Dibujar por primera vez cuando cargue la página
window.addEventListener("load", drawCanvas);
