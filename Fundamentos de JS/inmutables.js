//Programa sobre estructuras de datos inmutables
var tanti = {
  edad: 15
}

//como NO es inmutable: 
//var cumpleaños = persona => persona.edad++

var cumpleaños = persona => ({
  ...persona,
  edad: persona.edad + 1
  //retorna un NUEVO objeto con el cambio dado, 
  //se usa persona.edad porque es otra diferente a la persona que se desglosa
})
//OTRA FORMA DESGLOSANDO: var cumpleaños = ({edad}) => edad + 1 || usa edad + 1 pues es jason (objetos)

var tantiGrande = cumpleaños(tanti) //Guardar el objeto que se crea en una variable
var tantiSuperGrande = cumpleaños(tantiGrande)
