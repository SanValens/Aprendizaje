var eltanti = {
  nombre: 'Santi',
  edad: 18
}

const x = persona => persona.edad>18
/*function x(persona) {
  return persona.edad>18*/

if(x(eltanti)){
  console.log(`${eltanti.nombre} es mayor de edad`)
} else {
  console.log(`${eltanti.nombre} es menor de edad`)
}