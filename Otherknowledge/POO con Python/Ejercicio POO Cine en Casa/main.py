#/usr/bin/env python3.8
'''Este programa está sin terminar, basicamente por pereza, suerte con eso looser, solo es agregar las opciones
y que llame a las funciones cuando a ciertas decisiones. Estas funciones mencionadas ya estan escritas y todo'''


from home_cinema import Home_Cinema
from main_tv import TV
from main_stereo import Stereo
from os import system
from random import randint

if __name__ == '__main__':
    def new_device_info():
        type_device = int(input('1. TV | 2. Stereo: '))
        name = input('Enter a name for identifying the device: ')
        brand = input('Enter the brand of the device: ')
        id = randint(1000, 10000)
        familia_ospina.add_device(name, brand, id, type_device)
    
    familia_ospina = Home_Cinema()
    system('cls')
    print('Opciones:')
    print('1. Agregar Dispositivo')
    print('2. Eliminar Dispositivo')
    print('3. Apagar/ Encender todos los dispositivos')
    print('4. Cambiar Volumen')
    print('5. Salir')
    while True:
        #Aqui podria agregar mas opciones como cambiar el canal y eso, lo haré despues... o no
        try: 
            choice = int(input('¿Qué deseas hacer? '))
        except ValueError:
            print('Numero ingresado no válido')
            system('cls')
        if choice == 1:
            new_device_info()
        elif choice == 2:
            pass
        elif choice == 3:
            action = int(input('1. Apagar | 2. Encender: '))
            if action == 1:
                familia_ospina.turn_everything_on_off(False)
            elif action == 2:
                familia_ospina.turn_everything_on_off(True)
            else:
                print('Valor ingresado no es valido')
        elif choice == 4:
            pass
        elif choice == 5:
            print('Bye bye, bro')
            break
