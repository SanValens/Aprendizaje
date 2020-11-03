var teclas = {
  UP: 38,
  DOWN: 40,
  RIGHT: 39,
  LEFT: 37
};

console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);

function dibujarTeclado(evento) //detalles del evento (que tecla se oprimió), es una variable
{
  if(evento.keyCode== teclas.up)
  {
    console.log("Arriba");
  }

}
