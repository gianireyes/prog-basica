var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  BACKSPACE: 8
};

document.addEventListener('keydown', dibujarTeclado);

var cuadrito = document.getElementById('area_de_dibujo');
var papel = cuadrito.getContext('2d');
var y = 150;
var x = 150;
var lineas = [];
dibujarLinea('red', x - 1, y - 1, x + 1, y + 1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
  lineas.push({ xinicial, yinicial, xfinal, yfinal });
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
    case teclas.BACKSPACE:
      borrarRayita('white', papel);
      break;
  }
}

function borrarRayita(color, lienzo) {
  console.log('called', lineas);

  var linea = lineas.pop();
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 4;
  lienzo.moveTo(linea.xinicial, linea.yinicial);
  lienzo.lineTo(linea.xfinal, linea.yfinal);
  lienzo.stroke();
  lienzo.closePath();

  x = linea.xinicial;
  y = linea.yinicial;
}
