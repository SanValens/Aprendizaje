var veces = 100;
var d;
for(var i=1; i<=veces; i++) //siempre agrega la i
{
  d= false;
  if(i % 3 == 0)
  {
    document.write("Fizz");
    d= true;
  }

  if(i % 5 == 0)
  {
    document.write("Buzz");
    d= true;
  }

if(!d) //si "d" no es verdadero
  {
    document.write(i);
  }
  document.write("<br />"); //si pones HTML dentro de comillas en javascript entonces funciona como HTML
}


 //if(i % 3 != 0 && i % 5 != 0) && es un "y", MUY IMPORTANTE, el "!" significa "diferente" o "no" //
//TODO ESTO SE PUEDE COMPLICAR CON FUNCIONES DE UNA MANERA DE PERRA PERO HASTA ACA TODO BIEN
