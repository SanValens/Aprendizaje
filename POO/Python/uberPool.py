#/usr/bin/env python3.8
from carrito import Car
class UberPool(Car): 
    brand = str
    model = str
    def __init__(self, license, driver, brand, model):
        super().__init__(license, driver)
        self.brand = brand
        self.model = model
    def printDataCar(self):
        print(self.license)