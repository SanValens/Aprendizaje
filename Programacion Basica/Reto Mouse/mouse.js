const canvas = document.getElementById('area_de_dibujo')
const papel = canvas.getContext('2d')
const btnBlue = document.getElementById('lineasAzules')
const btnRed = document.getElementById('lineasRojas')
const btnGreen = document.getElementById('lineasVerdes')
let currentColor = 'black'
let x_start, y_start

btnBlue.addEventListener('click', changeColor)
btnGreen.addEventListener('click', changeColor)
btnRed.addEventListener('click', changeColor)


function changeColor(e){
    currentColor = e.srcElement.name
}

canvas.addEventListener('mousedown', newLine) 

function newLine(e){
    x_start = e.offsetX
    y_start = e.offsetY
    canvas.addEventListener('mouseup', endLine)
}

function endLine(e) {
    dibujarLinea(currentColor, x_start, y_start, e.offsetX, e.offsetY, papel)
    canvas.removeEventListener('mouseup', endLine)
}


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 5;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}