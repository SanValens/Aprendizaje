#/usr/bin/env python3.8
class Account:
   id = int
   name = str
   document = str 
   email = str 
   password = str
   def __init__(self, document, name, email, password):
      self.name = name
      self.document = document
      self.email = email
      self.password = password
   def printDataDriver(self):
      print(self.password)
      