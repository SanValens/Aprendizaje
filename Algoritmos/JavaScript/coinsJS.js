/*Como solucionar "Maximum call stack size exceeded": 
 *tu codigo no para, solo... no lo hace*/

/* Este código no tiene en cuenta un número
 * limitado de billetes, si Santi del futuro
 * quiere implementarlos pues bienvenido sea*/

var b = document.getElementById("go")
b.addEventListener('click', go)

function go(){
  var valor = document.getElementById("dinero");
  var total = parseInt(valor.value);
  var SET = [20, 10, 5, 1]
  var cambio = []
  var x = 0
  var past;
  var y = -1
  if(total<0){
    resultado.innerHTML = "ERROR: no ingresar valores negativos"
    return 0
  }
  recusividad(SET, total)

  function recusividad(arr, keeper){
    if(keeper == 0){
      //Termina la recursividad
      printData()
    }
    else if(keeper >= arr[x]){
      if(arr[x]== past){
        //Billete repetido, aumenta cantidad
        cambio[y][1] += 1
        /*selecciono del set y (1, 2, 3, 4...), 
        también el valor dentro de este, y a 
        este ultimo le agrego uno*/
      } else {
        //Billete nuevo
        y++
        cambio.push([arr[x], 1]);
      }
      past = arr[x];
      recusividad(arr, keeper - arr[x])
    } else {
      x++
      recusividad(arr, keeper)
    }
  }
  function printData(){
    for(let x = 0; x < cambio.length; x++){
      resultado.innerHTML += "Te doy "+cambio[x][1]+" billete(s) de $"+cambio[x][0]+"<br/>"
                                    //Si uso el uno, llamo el valor interno, si es 0 es el subarray
    }
  }
}