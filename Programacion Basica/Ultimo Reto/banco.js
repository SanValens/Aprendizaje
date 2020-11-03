var x;
var mandar;
var mib;
var mandar_dinero;
var saldo = 200;
var verif;
var comprodesti = 0;
var costo_transaccion;
var bancodestino = "BancoPlatzi";
var actual;
var comprobante = "password";
var resultado = document.getElementById("incumplimiento");

var boton = document.getElementById('botoncito');

boton.addEventListener("click", leerCosto);

function leerCosto()
{
  var resultado = document.getElementById("mostrar");
  var pass = document.getElementById('password');
  var transferir = document.getElementById('cantidad');
  var banco = document.getElementById('miBanco');
  var hora = 10;
  mandar = parseInt(transferir.value); //por que no pusiste el parseInt idiota? es importante para no perder una hora de tu vida
  mib = banco.value;
  verif = pass.value;
  if((hora >= 9 && hora< 12) || (hora>=15 && hora< 20))
  {
    if(comprobante == verif && comprodesti)
    {
      if(comprodesti)
      {
        if(mib == bancodestino)
        {
          costo_transaccion = 0
          resultado.innerHTML += "El costo de la transaccion es de: "+ costo_transaccion + "<br />";
        }
        else
        {
          costo_transaccion = 100;
          resultado.innerHTML += "El costo de la transaccion es de: "+ costo_transaccion + "<br />";
        }
        retiro = mandar + costo_transaccion;
        if(saldo >= retiro)
        {
          resultado.innerHTML += "Transaccion realizada con exito: ";
          resultado.innerHTML += "Se han enviado $" + mandar +" dolares a BancoPlatzi" + "<br />";
          saldo = saldo - (mandar + costo_transaccion);
          resultado.innerHTML += "Saldo actual: " +saldo;
        }
        else
        {
           resultado.innerHTML += "Tu saldo es insuficiente para completar esta accion";
        }
      }
    }
    else
    {
      resultado.innerHTML += "Contraseña Incorrecta o cuenta objetivo no esta verificada<br />";
    }
  }
  else resultado.innerHTML += "No es hora de hacer Transferencias";
}
