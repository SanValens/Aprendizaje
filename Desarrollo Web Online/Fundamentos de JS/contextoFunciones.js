var tanti = {
  names: 'Santiago',
  lastName: 'Valenzuela',
  age: 15
}

var mom = {
  names: 'Ximena',
  lastName: 'Ospina',
  age: 42 //?
}

function sayHi(expression = 'Hi') { //si no se especifica, usa "Hi"
  console.log(`${expression}, my name is ${this.names}`)
}

const hiFromTanti = sayHi.bind(tanti)

setTimeout(sayHi.bind(tanti, 'Hi bro'),0) //Bind solo cambia el contexto, sin ejectutar

sayHi.call(tanti, 'Hi bro') //Ejecuta
sayHi.apply(tanti, ['Hi bro']) //Ejecuta y usa un array para los parametros