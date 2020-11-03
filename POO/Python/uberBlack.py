#/usr/bin/env python3.8
from carrito import Car
class UberBlack(Car):
    typeCarAccepted = str #Estas variables son arreglos, pero la señora no explicó como llenarlos de infromacion (en general)
    seatsMaterial = str #Iría con "= []", al parecer no se especifica de cuantos espacios es
    def __init__(self, license, driver, typeCarAccepted, seatsMaterial):
        super().__init__(license, driver)
        self.typeCarAccepted = typeCarAccepted
        self.seatsMaterial = seatsMaterial
    def printDataCar(self):
        print(self.driver.document)
