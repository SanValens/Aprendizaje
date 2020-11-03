const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const CROSS_TRUE = {crossDomain: true}
const CROSS_FALSE = {crossDomain: false}

var urlPersonajeObtener

console.log('Espera unos segundos...')
console.log('Puede tardarse')

function newSearch(id) {
  return new Promise((resolve, reject) => {
    urlPersonajeObtener = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    getCharacter(resolve, reject)
  })
}

function getCharacter(resolve, reject) {
  $.get(urlPersonajeObtener, CROSS_TRUE, (data)=>{
    //Recordemos que "data" nos lo entrega el servidor
    intentosError = 1;
    getHomePlanet(resolve, reject, data)
  })
  .fail(() => reject())
  //Reject = .catch, no te devuelvo el valor porque algo ocurrió (un error, o ya acabé)
}

function getHomePlanet(resolve, reject, character) {
  $.get(character.homeworld, CROSS_TRUE, (data)=>{
    let characterName = character.name
    let characterHome = data.name
    informacionTerminada(resolve, characterName, characterHome)
  })
  .fail(() => reject())
}

function informacionTerminada(resolve, characterName, characterHome){
  let characterE = { //Creo el objeto aquí para evitar problemas
    name: characterName,
    home: characterHome
  }
  resolve(characterE)
  /*RESOLVE SE EJECUTA COMO UN TASK?*/
}
//Metodos mas corto:

//Método Async-Await
async function start() {
  var losIDs = [1, 2, 3, 4, 5]
  var promesas = losIDs.map(id => newSearch(id))
  try{
    var elements = await Promise.all(promesas)
    printData(elements)
  } catch {
    mostrarError.innerHTML = '<strong>ERROR AL INTENTAR OBTENER PERSONAJE<strong>'
  }
}
start()
/* Método Promesas Paralelo
Promise
.all(promesas) //All usa el array para crear promesas en paralelo
.then(elements => { //El this se ejecuta una sola vez, con un array de los resultados
  printData(elements)
})
.catch(()=>{ //Un solo catch para el array
  mostrarError.innerHTML = '<strong>ERROR AL INTENTAR OBTENER PERSONAJE<strong>'
})
*/
const printData = (elements) => {
  for(let x = 0; x<elements.length; x++){
    if(elements[x].home == 'unknown') 
      console.log(`Mi nombre es ${elements[x].name}, y no se sabe conctretamente de donde vengo`)
    else 
      console.log(`Soy ${elements[x].name}, y vengo de ${elements[x].home}`)
  }
}