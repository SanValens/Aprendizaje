#/usr/bin/env python3.8
from payment import Payment

class Paypal(Payment): 
    email = str
    password = str
    autoritation = bool
    def __init__(self, id, cost, email, password, autoritation):
        super(Paypal, self).__init__(id, cost)
        self.email = email
        self.password = password
        self.autoritation = autoritation
    def printDataPayment(self):
        print(self.autoritation)