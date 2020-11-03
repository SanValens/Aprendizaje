function saludoInternacional(ending) {
  return function (name) {
    console.log(`Hola ${name} ${ending}`)
  }
}

const saludoMexicano = saludoInternacional('güey')

saludoMexicano('Santi')

//Saludo mexicano será la funcion anonima que está dentro de sInternacional,
//ingresando su variable respectiva