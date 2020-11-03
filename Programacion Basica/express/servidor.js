 var express = require("express");
 var aplicacion= express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);
 function inicio (peticion, resultado) //por default este es el orden, el segundo es mandar y el primero es recivir
 {
   resultado.send("Este servidor cerrará a en una hora");
 }
 function cursos (peticion, resultado)
 {
   resultado.send("Estos son los cursos");
 }

aplicacion.listen(8989);
