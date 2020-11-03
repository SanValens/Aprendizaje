var x = 4, y = '4'
//x == y >>true, automaticamente los convierte el mismo tipo de Dato
//x === y >>false, diferente tipo de dato

var tanti = { //objeto litea
  nombre: 'Santiago'
}
var otroDude = {
  ...tanti
}
//(ambos objetos) tanti == otroDude >>false, tienen diferente nombre :/ -> referncia -> lugar de memora, exactamente
//(ambos objetos) tanti === otroDude >>false, tienen diferente nombre :/ -> incluye pegado de atributos con "...tanti"
//Uno objeto y el otro = <Uno> | >>true, son el mismo lugar de memoria
//var otroDude = tant -> son apuntadores, si otroDude.nombre = 'Pepe', el de tanti tambien cambiará "automaticamente"