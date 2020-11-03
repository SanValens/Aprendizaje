#/usr/bin/env python3.8
class Stereo:
    brand = str
    name = str
    id_object = int
    def __init__(self, name, brand, id_object):
        self.name = name
        self.brand = brand
        self.id = id_object
        self.currentVolume = 10
        self.sources = ('AUX', 'DVD', 'USB', 'BLUETHOOT')
        self.source_indicator = 0
        self.current_source = self.sources[self.source_indicator]
        self.turnedOn = True
    
    def mute(self):
        self.volume = 0
        print(f"{self.name}: Okey... I won't say anything")
    
    def change_source(self, id):
        self.source_indicator = id
        self.current_source = self.sources[self.source_indicator]
        print(f'{self.name}: Source changed to {self.current_source}')

    def turn_on_off(self, action):
        if action and self.turnedOn != action:
            print(f'{self.name}: GOOD MORNING!')
        elif not(action):           
            print("{0}: I'm beeing turned Off, good Night".format(self.name))
            self.turnedOn = action
