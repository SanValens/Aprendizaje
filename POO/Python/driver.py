#/usr/bin/env python3.8
from account import Account
class Driver(Account):
    def __init__(self, document, name, email, password):
        super().__init__(document, name, email, password)
