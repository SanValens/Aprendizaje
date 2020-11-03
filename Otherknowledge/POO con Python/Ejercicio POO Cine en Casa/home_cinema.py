#/usr/bin/env python3.8
from main_tv import TV
from main_stereo import Stereo

class Home_Cinema:
    def __init__(self):
        self.devices = []
        self.turnedOn = True
        self.passer = None
    def turn_everything_on_off(self, action):
        '''This fuction change the variable turnedOn from True to False or viceversa
        the variable action is a bool, True is ON and False is Off
        '''
        for i in self.devices:
            i.turn_on_off(action)
        self.turnedOn = action
    def delete_device(self, id):
        del self.devices[id]

    def add_device(self, name, brand, id, type_):
        if type_ == 1:
            self.devices.append(TV(name, brand, id)) 
        elif type_ == 2:
            self.devices.append(Stereo(name, brand, id))
        else:
            print('Numero de tipo ingresado no es valido')
        print(self.devices)
