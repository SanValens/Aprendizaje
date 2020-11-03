var precioDeVino = 200.3

/*var total = precioDeVino * 3
 imprime 600.9000000000001 */
/*var total = precioDeVino *100 * 3 /100
 no lo recomiendo ni poco*/
var total = precioDeVino *3;
//Aproxima como si lo hicieras a mano, con las reglas
var totalStr = total.toFixed(1);
/** Tambien se puede usar Math.round junto con *100 dentro del (), y /100 fuera */

console.log(totalStr);

var total2  = parseFloat(totalStr);
