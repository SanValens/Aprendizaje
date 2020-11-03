var imagenes = []; //Esta es otra manera de hacer JASON
imagenes["Cauchin"]= "vaca.png";
imagenes["Pokacho"]= "pollo.png";
imagenes["Tocinauro"]= "cerdo.png";

//.nombre es solo una variable, que entra a las funciones o llaves por medio de los parentesis
//si lo pongo con "," se separan los objetos por lineas
//pokacho.hablar(); //se pueden poner funciones como si fueran metodos

var coleccion= [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 90, 40));

for(var f of coleccion) console.log(coleccion[f]);  //ciclo que depende de un grupo de variables (ARRAYS)
