var vp = document.getElementById("villaPlatzi"); //siempre esto esta
var papel = vp.getContext("2d"); //importante para invocar elementos
var vaca =
{
    cargaOK: false
};
var fondo = //esto es JASON javascript order notation
{
  cargaOK: false
};

fondo.objeto = new Image(); //creo una imagen
fondo.objeto.src = "tile.png"; //la imagen completa fue creada, pero ¿cual? se agrega un src haciendo referencia a el url
fondo.objeto.addEventListener("load", cargarFondo); //la imagen tiene que haber cargado para poder ponerla en el papel

vaca.objeto = new Image();
vaca.objeto.src = "vaca.png";
vaca.objeto.addEventListener("load", cargarVacas);

function cargarVacas()
{
  vaca.cargaOK =true;
  dibujar();
}

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.objeto, 0, 0); //no importa que pase siempre se va poner primero el fondo
  }
  if(vaca.cargaOK)
  {
    for(var i=0; i<10; i++)
    {
      var x = aleatorio(0, 420);
      var y = aleatorio(0, 420);
      papel.drawImage(vaca.objeto, x, y); //despues la vaca
    }
  }
}


//HAY PROBLEMAS CON CARGAR LOS ELEMENTOS POR SEPARADO, EL QUE SE CARGA PRIMERO SALE PRIMERO, ES DE SUERTE, LO QUE HAY QUE HACER ES CARGARLOS POR SEPARADO


function aleatorio(min, maxi)
{
  var resultado;
  resultado= Math.floor(Math.random() * (maxi - min + 1)) + min; //floor para numero debajo del indicado y Math.ceil(x) para el numero encima
  return resultado; //devolverle el valor a la variable que llama la funcion
}
