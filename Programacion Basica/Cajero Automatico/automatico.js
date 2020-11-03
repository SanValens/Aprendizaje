/*Este codigo es nice, pero otro que funciona un 
 *poco mejor es el coinsJS.js en: /Algoritmos/JavaScript
 *Checkalo*/
class Billete {
  constructor(v, c) {
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero()
{
  var t= document.getElementById('dinero');
  dinero = parseInt(t.value); //value es lo que esta escrito dentro del objeto, no el objeto en sí
  for(var bi of caja)
  /* of se usa para ejecutar el bloque por cada objeto 
   * iterable de la siguiente variable
   * a su vez, pasa a la variable "bi" los valores del 
   * primer...segundo...tercer valor*/
  {
    if(dinero>0)
    {
      div = Math.floor(dinero / bi.valor);
    if(div > bi.cantidad)
    {
      console.log(bi.cantidad);
      papeles = bi.cantidad;
    }
    else
      {
        papeles = div;
      }
      entregado.push(new Billete(bi.valor, papeles) );
      dinero -=(bi.valor * papeles);
    }
  }
  if(dinero>0)
  {
    resultado.innerHTML += "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :("; //agregar cosas al HTML con "innerHTML", se usa "=" y no "()";
  }
  else
  {
    for(var e of entregado)
    {
      if(e.cantidad > 0)
      {
          resultado.innerHTML += "Te doy " + e.cantidad +" billete(s) de $" + e.valor + "<br />"; //innerHTML es la manera correcta de hacer el document.write
      }
    }
  } 
}
var caja= [];
var entregado = [];
//Primera columna el valor, la segunda la cantidad
//Crea un pequeño array dentro de un array, con el valor y la cantidad
caja.push(new Billete(50, 10)); //llaman la funcion y les dan valores
caja.push(new Billete(20, 5));
caja.push(new Billete(12, 1));
caja.push(new Billete(10, 10));
caja.push(new Billete(5,  5));
//console.log(caja[0]);
var div;
var papeles;
var dinero;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
