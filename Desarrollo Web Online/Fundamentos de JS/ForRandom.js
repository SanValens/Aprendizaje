var tanti = {
  nombre: 'Santiago',
  edad: 15,
  peso: 48
}

document.write(`Al inicio del año ${tanti.nombre} pesa ${tanti.peso}kg. </br>`);


const cambiarPeso = ({peso}, cambio) => peso += cambio

for(var i = 1; i < 365; i++) {
  var random = Math.random()
  if(random <0.25){
    tanti.peso = cambiarPeso(tanti, 0.2)
  }
  else if(random < 0.5) {
   tanti.peso = cambiarPeso(tanti, -0.2)
  }
}


document.write(`Al final del año ${tanti.nombre} pesa ${tanti.peso.toFixed(2)}kg`)