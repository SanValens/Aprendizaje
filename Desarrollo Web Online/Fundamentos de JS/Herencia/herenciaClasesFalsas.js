/*Este no es el codigo original sobre la creacion de prototipos*/
class Personas {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  //Sin necesidad de funciones o .prototypes.saludar, solo es así:
  saludar(fn) {
    var {nombre, apellido} = this //rara manera de pasar this a variable
    console.log(`Hola, mi nombre es ${nombre} ${apellido}`)
    if (fn) {
      //si fn no es undefined
      fn(this.nombre, false);//false pues no es developer, estamos en la parte de Personas simplemente
    }
    console.log("")
  }
  isTall() {
    return this.altura > 1.75
  }
}
class Desarrollador extends Personas {
  //extends es lo que crea la herencia
  constructor(nombre, apellido, altura) {
    //COMO LLAMAR CONSTRUCTOR DE LA CLASE PADRE:
    super(nombre, apellido, altura)
    //Ahora si podemos acceder a this.nombre y etc
  }
  saludar(fn) {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, y amo programar en JavaScript`)
    if (fn) {
      //si fn no es undefined
      fn(this.nombre, true);//true pues estamos en la parte de Desarrollador
    }
    console.log("")
  }
}

function responderSaludo(nombre, esDesarrollador) {
  console.log(`Ok, buen día ${nombre}`)
  if(esDesarrollador) {
    console.log('Y por lo que veo eres desarrollador')
  }
}

var tanti = new Desarrollador('Santiago', 'Valenzuela', 1.68)
var madrecita = new Personas('Martha Ximena', 'Ospina', 1.59)
var bro = new Personas('Juan Diego', 'Valenzuela', 1.76)

tanti.saludar(responderSaludo)
madrecita.saludar(responderSaludo)
bro.saludar(responderSaludo)