var elTanti = {
  nombre: 'Santiago',
  edad: 15,
  peso: 75
}

var meta = 3;
var cambioDePeso = 0.3
const PESO_IDEAL = elTanti.peso - meta

const comeMucho = () => Math.random() < 0.3
const haceDeporte = () => Math.random() < 0.4

const adelgazar = ({peso}) => elTanti.peso = peso - cambioDePeso;
const engordar = ({peso}) => elTanti.peso = peso + cambioDePeso;

var diasQueSuceden = 0;

while (elTanti.peso > PESO_IDEAL){
  //debugger
  /* Si tenemos la consola abierta,
   * va a detener la ejecución del
   * programa apenas lea el comando
   * "debugger" en tu codigo, allí podemos
   * revisar el estado de las variables*/
  if(comeMucho()){
    engordar(elTanti)
  }
  if(haceDeporte()) {
    adelgazar(elTanti)
  }
  diasQueSuceden++
  if(diasQueSuceden == 20) debugger
}
/**El funcionamiento del do{}while(), se ejecuta al menos una vez, y repite cuando la condicion sigue cumpliendo */
console.log(`${elTanti.nombre} tardó ${diasQueSuceden} días en bajar ${meta}kg`)