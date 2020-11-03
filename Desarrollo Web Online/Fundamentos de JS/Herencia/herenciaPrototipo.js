/*Este no es el codigo original sobre la creacion de prototipos*/

//Método largo de Herencia: usa función heradaDe
function heredaDe(protoHijo, protoPadre) {
  //Aquí asignamos el hijo a la padre
  var fn = function() {} //Funciones rapidas se suelen llamar "fn" o "noop" = no hace nada
  //La funcion vacía, para poder asignar prototipos (como una variable solo para pasar cosas)
  fn.prototype = protoPadre.prototype
  protoHijo.prototype = new fn 
  //Para no pisar protoPadre.prototype, entonces le asignamos un fn, 
  //del cual su prototype ya es el del padre
  protoHijo.prototype.constructor = protoHijo
  //Asignamos la funcion constructora (supongo que es la de los this.)
}

function Personas(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}
Personas.prototype.saludar = function () {
  console.log(`Hola, mi nombre es ${this.nombre}`)
}

Personas.prototype.isTall = function () {
  return this.altura > 1.75
}

//Queremos que Desarrollador herede isTall de Persona, pues és hijo de su prototipo
function Desarrollador(nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

heredaDe(Desarrollador, Personas)

//Tenemos el saludo normal de Personas en Desarrollador,
//y lo pisamos a continuacion para cambiarlo (solo a este):
Desarrollador.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre}, y amo programar en JavaScript`)
}

/*var tanti = new Personas('Santiago', 'Valenzuela', 1.68)
var qcha = new Personas('Martha Ximena', 'Ospina', 1.59)
var bro = new Personas('Juan Diego', 'Valenzuela', 1.76)
*/


