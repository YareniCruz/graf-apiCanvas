var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var edit = document.getElementById("edit");

// Guardamos el código inicial para el botón "Reset"
var initialCode = textarea.value;

/*function drawCanvas() {
    try {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // eval ejecutará lo que esté escrito en el textarea
        eval(textarea.value);
    } catch (e) {
        console.error("Error en el código del canvas: ", e);
    }
}*/
/*
// RECTANGULO
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}*/

// TRIANGULO
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
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


