#/usr/bin/env python3.8
from account import Account

class Car: #siempre primera en mayúscula:: Y el nombre del archivo en minúscula
    """Este es un comentario multilinea
    este comentario tiene que estar al igual en Tabs según donde está
    y aqui termina este comentario"""
    id = int
    license = str
    driver = Account("", "", "", "") #Es decir que está en Account y tiene dos propiedades
    passenger = str
    def __init__(self, license, driver): #__init__ es inicializar los atributos de la instancia de la clase
    #Pensamiento clase Fundamentos de JS: __init__ es para el contructor
    #Al parecer "self, " es obligatorio
    #ESTO SE HACE PARA CREAR UNA INSTANCIA DE LA CLASE
        self.license = license
        self.driver = driver
    
    def printDataCar(self):
        print("Mi papá es: "+self.driver.name) #se pone el "self" sino no lo encuentra

        