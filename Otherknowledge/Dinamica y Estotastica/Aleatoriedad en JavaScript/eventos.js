var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 5;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function getDirection(rand) { //Ingresa evento los atributos del suceso
    var movimiento = 20;
    if(rand < 0.25) {
        dibujarLinea("red", x, y, x, y - movimiento, papel);
        y = y - movimiento;
    }
    else if(rand < 0.5) {
        dibujarLinea("red", x, y, x, y + movimiento, papel);
        y = y + movimiento;
    }
    else if(rand <0.75) {
        dibujarLinea("red", x, y, x - movimiento, y, papel);
        x = x - movimiento;
    }
    else {
        dibujarLinea("red", x, y, x + movimiento, y, papel);
        x = x + movimiento;
    }
}

let x = 150
let y = 150

function caminoDelBorracho() {
    let times = 100000
    dibujarLinea("black", x-3, y-3, x+3, y+3, papel);
    for(i = 0; i<times; i++){
        getDirection(Math.random())
    }
}

caminoDelBorracho()