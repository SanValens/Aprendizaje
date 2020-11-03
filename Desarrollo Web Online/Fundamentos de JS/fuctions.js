var sujeto1 = { //Según freddy esto es JASON
  nombre: 'Santiago',
  apellido: 'Valenzuela',
  edad: 12
} //Objeto = clave+valor
/* Si estas usando parametros de funciones, 
 * puedes hacer de la siguiente manera: 
 * "<nombreParametro>.nombre.toUpperCase()"
 * por ejemplo... */
  /* o de la siguente manera: 
  fuction imprimirEnMayusculas({nombre}) para solo tener esa variable
  */
var nombre = 'Santiago', edad = 15 //las variables estan en toda la ventana "window.nombre"

imprimirEdad(nombre, edad);
imprimirEdad('Juan')
//Juan tiene undefined año(s), pues es POCO TIPADO e INTERPRETADO

function imprimirEdad(n, e) {
  console.log(`${n} tiene ${e} año(s)`);
}

//var { nombre } = persona |==| nombre = persona.nombre