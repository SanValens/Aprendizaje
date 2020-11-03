var nombre = 'Santiago', apellido = 'Valenzuela'
var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();
var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length;

var nombreCompleto = `${nombre} ${apellido}`
//Interpolación de texto -> Template Strings, funciona para imprimir directamente
var str = nombre.substr(0,1);
//Reto
var size = nombre.length - 1
console.log(nombre.charAt(size));