var santiago = {
  nombre: 'Santiago',
  edad: 15
}

//Tenemos muchas opciones de acuerdo a lo que queremos editar: (tener en cuenta fuctions.js)


/*function cumpleaños(persona) {
  persona.edad += 1
  //santiago.edad = 16
}
  !=
function cumpleañosSinBugs(edad) {
  edad += 1;
  //debemos hacer el return
}*/
function cumple(persona) {
  /*Crea toooodo un nuevo objeto (persona) que sea igual a 'santaigo' y
  aumentale uno a su edad: */
  return { //el return hace que en console veamos el resultado de una vez, como en la graficadora
    ...persona, //desglosamos la variable, y así puedo llamar a su shit solo mencionandola
    edad: persona.edad + 1
  }
}


