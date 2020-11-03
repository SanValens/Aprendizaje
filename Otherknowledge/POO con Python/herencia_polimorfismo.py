#/usr/bin/env python3.8
#/usr/bin/env python3.8
class Rectangulo:
    def __init__(self, altura, base):
        self.altura = altura
        self.base = base
    def calculate_area(self):
        #return the area 
        return self.altura * self.base

class Cuadrado(Rectangulo): #Escribimos la superclase
    def __init__(self, lado):
        super().__init__(lado, lado)
        #altura es lado, y base es lado
    '''Polimorfismo es reescribir la funcion calculate_area pero con
    nuevos elementos o funciones, en Java se usa @Override, pero en Python NO toca decorar'''


if __name__ == "__main__":
    ra = Rectangulo(12, 5)
    print(ra.calculate_area())
    ca = Cuadrado(5)
    print(ca.calculate_area())