#/usr/bin/env python3.8
from payment import Payment

class Cash(Payment):
    def __init__(self, id, cost):
        super(Cash, self).__init__(id, cost)
    def printDataPayment(self):
        print(self.cost)
