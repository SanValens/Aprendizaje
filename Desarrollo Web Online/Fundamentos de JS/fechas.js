function diasEntreFechas(fecha1, fecha2) {
  const diferencia = Math.abs(fecha1 - fecha2) //Ya sabes, abs es del valor absoluto
  const unDia = 1000 * 60 * 60 * 24 //1000 milisegundos, 60 segundos... bla bla
  
  return Math.floor(diferencia / unDia)
}

const hoy = new Date()
const nacimiento = new Date(2004, 10, 13)
console.log(diasEntreFechas(hoy, nacimiento))