#/usr/bin/env python3.8
class TV:
    name = str
    brand = str
    id = int
    def __init__(self, name, brand, id):
        self.name = name
        self.marca = brand
        self.id = id
        self.turnedOn = True
        self.internetOn = True
        self.imgModes = ('Sports', 'Video Games', 'Movie', 'TV')
        self.current_img_mode_id = 3 #TV
        self.img_mode_using = self.imgModes[self.current_img_mode_id]
        self.ports = ('HDMI 1', 'HDMI 2', 'AV', 'Screen Mirroring')
        self.current_port_indicator = 2 #AV
        self.port_using = self.ports[self.current_port_indicator]

    def change_source(self, id):
        self.current_port_indicator = id
        self.port_using = self.current_port_indicator[id]
        print('{0}: You have changed to {1}'.format(self.name, self.port_using))

    def _change_imgMode(self, id):
        self.current_img_mode_id = id
        self.img_mode_using = self.current_img_mode_id[id]
        print('{0}: You have changed to {1}'.format(self.name, self.img_mode_using))


    def turn_on_off(self, action):
        if action and self.turnedOn != action:
            print(f'{self.name}: GOOD MORNING!')
        elif not(action):           
            print("{0}: I'm beeing turned Off, good Night".format(self.name))
            self.turnedOn = action

    def _openNetflix(self):
        if self.internetOn:
            print(f'{self.name}: I am opening Netflix sucefully')
        else: print(f"{self.name}: Internet connection error")

    