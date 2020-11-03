#/usr/bin/env python3.8
from traits import Traits
class Champs:
    name = str
    cost = int
    traits = Traits("", "", "")
    def __init__(self, name, cost, traits):
        self.name = name
        self.cost = cost
        self.traits = traits
    def printDataChamp(self):
        print("El nombre del campeón es: "+self.name)
        print("La primera clase del campeón es: "+self.traits.firstTrait)
        print("La segunda clase del campeón es: "+self.traits.secondTrait)
        print("La tercera clase del campeón es: "+self.traits.thirdTrait)
        print("")
        


