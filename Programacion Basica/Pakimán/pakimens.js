class Pakiman //creamos la definicion de un objeto
{
  constructor(n, v, a) //funcion que se llama cuando se crea la imagenen //SOLO DENTRO DE LOS constructor SE PUEDEN CREAS VARIABLES, EN CLASS NO SE PUEDE POR DEFAULT
  { //this hace alucion a las variables fuera de la clase
    this.imagen = new Image();
    this.nombre= n; //cauchin con la extencion popo hace referencia a el nombre, que esta escrito cuando se llama la funcion
    //this es para  indicar que pertenece a las Clases //REFERENCIA A LA INSTANCIA (VARIABLE cauchin)
    //cauchin.tipo= tierra;
    this.vida= v;
    this.ataque= a;

    this.imagen.src= imagenes[this.nombre]; //guardo el source en una extencion
  }
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<br /><strong>"+ this.nombre+ "</strong><br />")
    document.write("Vida: "+ this.vida + "<br />");
    document.write("Ataque: "+ this.ataque + "<hr />"); //hr es para hacer una linea
    document.write("</p>"); //los parrafos ayudan a organizar
  }
}
//las clases corren tambien sin importar variables porque se cargan en la memoria RAM antes de empezar a desarrollarse
