var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var borrar = {
  BACKSPACE: 8
};

document.addEventListener('keydown', dibujarTeclado);

var cuadrito = document.getElementById('area_de_dibujo');
var papel = cuadrito.getContext('2d');
var y = 150;
var x = 150;

dibujarLinea('red', x - 1, y - 1, x + 1, y + 1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento) {
  console.log(evento.keyCode);

  var colorcito = 'pink';
  var movimiento = 10;

  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;
  }
}

function borrarRayita(evento) {
  if (evento.keyCode == borrar.BACKSPACE) {
    dibujarLinea('red', x + 1, y + 1, x - 1, y - 1, papel);
  }
}
