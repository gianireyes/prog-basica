var tecla = {
                ENTER: 13
            };
             
var texto = document.getElementById("texto/lineas");
var boton = document.getElementById("buttoncito");
boton.addEventListener("click", dibujoPorClick);
texto.addEventListener("keyup", oprimirTecla);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;


function dibujarLinea(color, xinicial, yinicial,xfinal,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function oprimirTecla(evento)
{   
if(evento.keyCode == tecla.ENTER)
{
    dibujoPorClick()
}
}

function dibujoPorClick() 

{    
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var xi, yf
    var espacio = ancho / lineas;
    
      
    
    for(l = 0; l < lineas; l++)
    
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea("black", 0, yi, xf, 300);
        
    }
    
    for(l = 0; l < lineas; l++)
    
    {
        xi = espacio * l;
        yf = espacio * (l + 1);
        dibujarLinea("green", xi, 0, 300, yf);
    }
        
    
        dibujarLinea("green", 1, 1, 1, 300);
        dibujarLinea("green", 1, 299, 299, 299);
        dibujarLinea("green", 299, 0, 0, 1);
        dibujarLinea("green", 1, -100000, 299, 299);
         
}




