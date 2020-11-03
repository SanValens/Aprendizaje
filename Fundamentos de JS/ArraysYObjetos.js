var tiago = {
  nombre: 'Santiago',
  altura: '1.65',
  belleza: true,
  libros: 5
}
var xime = {
  nombre: 'Ximena',
  altura: '1.55',
  belleza: true,
  libros: 5
}
var jd = {
  nombre: 'Juan Diego',
  altura: '1.71',
  belleza: false,
  libros: 9
}

var familiaOspina = [tiago, xime, jd]

//acceder al nombre de tiago: familiaOspina[0]['nombre'] o familiaOspina[0].nombre

/* O desglosarlos cuando estés dentro de un return 
 * a la que se haya entrado como parametro el objeto*/

 //Filter
var sonFeos = ({belleza}) => belleza == false

var feos = familiaOspina.filter(sonFeos)

const pasarAlturaACms = (persona) => ({
  //usamos "persona" y no {altura} porque tambien queremos guardar el nombre y las otras variables
  ...persona,
  altura: (persona.altura * 100).toFixed(0)
  //Desglosando las variables al parecer se crean los nuevos objetos
})

var personasCms = familiaOspina.map(pasarAlturaACms)
//Retorna un Array con los elementos modifiados 


const contarLibros = (acum, {libros}) => acum + libros
//acum = acum+libros. No necesariamente pues hay un return

var totalDeLobrois = familiaOspina.reduce(contarLibros, 0)
//Suma los valores de la variable libros,
//que pertenece a familiaOspina implícita antes de .reduce
console.log(totalDeLobrois)