#/usr/bin/env python3.8
from payment import Payment
class Card(Payment):
    name = str
    number = int
    cvc = int 
    def __init__(self, id, cost, name, number, cvc)
        super(Card, self).__init__(id, cost)
        self.name = name
        self.number = number
        self.cvc = cvc

    def printDataPayment(self):
        print(self.cvc)
