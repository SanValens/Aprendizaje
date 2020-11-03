#/usr/bin/env python3.8
from carrito import Car
class UberVan(Car):
    typeCarAccepted = str
    seatsMaterial = str
    def __init__(self, license, driver, typeCarAccepted, seatsMaterial):
        super().__init__(license, driver)
        self.typeCarAccepted = typeCarAccepted
        self.seatsMaterial = seatsMaterial
    def printDataCar(self): #Este 'self' es muy importante
        print(self.seatsMaterial)