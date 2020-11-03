#/usr/bin/env python3.8
from baseDatos2 import alfabeto
from baseDatos2 import comandos

def main():
    while True: 
        try:
            return comandos[comandos.index(alfabeto[9])]
            #No hay j en los comandos
        except ValueError: #Especifico el error que espero 
            print ('No hay comando de referencia')
        except: 
            print ('No hay comando de referencia 2')
        else: #Si no hay error se ejecuta
            print('Sin errores perra')
print(f'{main()}, o qué')