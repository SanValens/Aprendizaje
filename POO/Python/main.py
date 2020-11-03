#/usr/bin/env python3.8
from driver import Driver
from user import User
from carrito import Car #de el archivo "car", importa la clase "Car", siempre en mayúscula
from account import Account
from uberX import UberX
from uberPool import UberPool
from uberBlack import UberBlack
from uberVan import UberVan
if __name__ == "__main__": 
    primerCarro = Car("AMQ123", Driver("52417472", "Diego Valenzuela", "d_valens@hotmail.com", "12345678")) #no se pone el tipo de variable, solo la relacion main-clase
    """EL PRIMER VALOR ES UNA VARIABLE QUE INGRESAMOS
    EL SEGUNDO ES EL NOMBRE DE LA CLASE EN EL OTRO ARCHIVO QUE LLAMAMOS EN "from" """
    primerCarro.printDataCar()
    #print(vars(primerCarro.driver)) se usa vars para que se fuerce a imprimirce como .jason
    primerCarro.driver.printDataDriver() #Es necesario específicar que hacemos referencia a Driver, pues realmente es de tipo carro, y no una cuenta en sí
    #No importa si está en la clase Account o en la cuenta Driver, pero debe ser Buena Práctica la segunda