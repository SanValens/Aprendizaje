//Lo unico especial es el console.log directo en el callback hell

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const CROSS_TRUE = {crossDomain: true}
const CROSS_FALSE = {crossDomain: false}

function obtenerPersonaje(id, llamoCallback) {
  let urlPersonajeObtener = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(urlPersonajeObtener, CROSS_TRUE, llamoCallback)
  .fail(() => {
    console.log('Error de conexión')
  })
}

llamarPersonajesAPI()

function llamarPersonajesAPI() {
  obtenerPersonaje(1 , function(person) {
    console.log(`He obtenido el personaje: ${person.name}`)
    obtenerPersonaje(2, function(person){
      console.log(`He obtenido el personaje: ${person.name}`)
      obtenerPersonaje(3, function(person){
        console.log(`He obtenido el personaje: ${person.name}`)
        obtenerPersonaje(4, function(person){
          console.log(`He obtenido el personaje: ${person.name}`)
          obtenerPersonaje(5, function(person){
            console.log(`He obtenido el personaje: ${person.name}`)
            obtenerPersonaje(6, function(person){
              console.log(`He obtenido el personaje: ${person.name}`)
              obtenerPersonaje(7, function(person){
                console.log(`He obtenido el personaje: ${person.name}`)
                obtenerPersonaje(8, function(person) {
                  console.log(`He obtenido el personaje: ${person.name}`)
                })
              })
            })
          })
        })
      })
    })
  })
}