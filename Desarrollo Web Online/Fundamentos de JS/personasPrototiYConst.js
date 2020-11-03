function Personas(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
  //this.work = false
  //Cuando se use este prototipo, work SIEMPRE será falso (inicialmente)
}
Personas.prototype.saludar = function() {
  console.log(`Hola, mi nombre es ${this.nombre}`)
  //Como es parte del prototipo, se usa "this", el nombre usado acutalmente
}

Personas.prototype.isTall = function() {
  return this.altura > 1.8
} //Recuerda poner los paréntesis en la consola, genio

var tanti = new Personas('Santiago', 'Valenzuela', 1.68)
var qcha = new Personas('Martha Ximena', 'Ospina', 1.59)
var bro = new Personas('Juan Diego', 'Valenzuela', 1.76)
/**new se usa para crear objetos (como el objeto tanti),
  *base a prototipos (el Personas)
  *esta palabra hace que retorne el objeto que se
  *acaba de construir
  (solo usala men)*/