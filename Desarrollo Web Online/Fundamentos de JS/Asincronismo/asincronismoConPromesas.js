//EN ESTE CODIGO HAY DOS OPCIONES: BOTON Y TEXTO, O PROMESAS ENCADENADAS
//VER LAS DOS PARTES DOCUMENTADAS

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const CROSS_TRUE = {crossDomain: true}
const CROSS_FALSE = {crossDomain: false}

var urlPersonajeObtener
var whileAnError = false
var intentosError = 1

const INTENTOS_MAXIMOS = 5

/* //PROGRAMA ELEGIR VALOR CON TEXTO Y BOTON
function goProgram() {
  var textBoxID = document.getElementById('idPersonaje')
  var id = Math.floor(textBoxID.value)
  if(id>=84 || id<1) console.log(`Personaje con ID ${id} inexistente, intentar numeros enteros menores a 83 y mayores a 0`)
  else newSearch(id)
  .then((characterElements) => {
    if(characterElements.home == 'unknown') 
      console.log(`Me llamo ${characterElements.name}, pero no se sabe de donde vengo`)
    else
      console.log(`Me llamo ${characterElements.name}, y vengo de ${characterElements.home}`)
  })
}

var b = document.getElementById('botonDeGo')
b.addEventListener('click', goProgram)
//Aquí termina
function newSearch(id) {
  return new Promise((resolve, reject) => {
    urlPersonajeObtener = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    getCharacter(resolve, reject)
  })
} */

function getCharacter(resolve, reject) {
  $.get(urlPersonajeObtener, CROSS_TRUE, (data)=>{
    //Recordemos que "data" nos lo entrega el servidor
    intentosError = 1;
    getHomePlanet(resolve, reject, data)
    //informacionTerminada(resolve, characterName)
  })
  .fail(() => errorConexion(resolve, reject, getCharacter))
  //Reject = .catch, no te devuelvo el valor porque algo ocurrió (un error, o ya acabé)
}

function errorConexion(resolve, reject, funcionReintentar, character) {
  /* Ingreso character solo para poder devolverlo a los 5
   * segundos con la llamada a funcion,
   * sino se forma un lio con variables globales*/
  if(intentosError<INTENTOS_MAXIMOS){
    mostrarError.innerHTML = '' //"Reiniciar" texto
    mostrarError.innerHTML += 'ERROR AL ESTABLECER CONEXIÓN CON EL SERVIDOR</br>'
    setTimeout(()=>{
      funcionReintentar(resolve, reject, character)}, 5000)
      //Envía character aunque getCharacter no lo recibe, no importa
    mostrarError.innerHTML += 'Reintentando en 5 segundos...</br>'
    mostrarError.innerHTML += `Numero de intentos: ${intentosError}</br></br>`
    intentosError++
  } else {
    reject()
  }
}

function getHomePlanet(resolve, reject, character) {
  $.get(character.homeworld, CROSS_TRUE, (data)=>{
    let characterName = character.name
    let characterHome = data.name
    informacionTerminada(resolve, characterName, characterHome)
  })
  .fail(() => errorConexion(resolve, reject, getHomePlanet, character))
}

function informacionTerminada(resolve, characterName, characterHome){
  let characterE = {
    name: characterName,
    home: characterHome
  }
  resolve(characterE)
  /*RESOLVE SE EJECUTA COMO UN TASK?*/
}

/*function llamarPersonajesAPI(idWanted) {
  newSearch(idWanted)
  .then((elements)=>{
    mostrarError.innerHTML = '' //"Reiniciar" texto
    if(elements.home == 'unknown') console.log(`El personaje es ${elements.name} pero no se sabe de donde vengo concretamente`)
    else console.log(`El personaje es ${elements.name}, que viene de ${elements.home}`)
    return newSearch(2)
  })
  .then((elements) =>{
    mostrarError.innerHTML = '' //"Reiniciar" texto
    if(elements.home == 'unknown') console.log(`El personaje es ${elements.name} pero no se sabe de donde vengo concretamente`)
    else console.log(`El personaje es ${elements.name}, que viene de ${elements.home}`)
    return newSearch(3)
  })
  .then((elements) =>{
    mostrarError.innerHTML = '' //"Reiniciar" texto
    if(elements.home == 'unknown') console.log(`El personaje es ${elements.name} pero no se sabe de donde vengo concretamente`)
    else console.log(`El personaje es ${elements.name}, que viene de ${elements.home}`)
    return newSearch(4)
  })
  .then((elements) =>{
    mostrarError.innerHTML = '' //"Reiniciar" texto
    if(elements.home == 'unknown') console.log(`El personaje es ${elements.name} pero no se sabe de donde vengo concretamente`)
    else console.log(`El personaje es ${elements.name}, que viene de ${elements.home}`)
  })
  .catch(()=>{
    mostrarError.innerHTML = '<strong>ERROR AL INTENTAR OBTENER PERSONAJE<strong>'
  })
}
llamarPersonajesAPI(1)*/