#/usr/bin/env python3.8
class perro():

  def __init__(self, id, nombre, size, raza): #Acá se crean de una vez las variables
      #print(self)es todo lo que és el objeto
      self.nombre=nombre
      self.size=size
      self.raza=raza

  def ladra(self): #Estas funciones se definen, y se lanzan cuando sean llamadas con una variable "chucho"
    s="" #"s" es una variable string
    for l in self.nombre: #Este for repite "l" por cada letra que tenga el nombre del perro
      #Es un ciclo "For" en Python
      s+="wof" #"s" es igual a "s" mas un wof por cada letra del nombre
    print(s)


chucho=perro( "987", "Otto","grande","husky")
#Cuando digo que chucho es un perro, automaticamente se llama a la instancia "__init__", se identifican las variables
#Despues se hace el método "ladra()", solo un ejemplo de uso "for" o "print"
chucho.ladra()

#wofwofwofwof

cloe=perro("123", "cloe","mini","chihuahua")
cloe.ladra()

#wofwofwofwof
