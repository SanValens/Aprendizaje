#/usr/bin/env python3.8
class Boton():
    def __init__(self, texto = 'Botón', color = 'Azul', accion = None): #En python las variables no TIENEN que ser definidas, si especifico las que
        self.texto = texto
        self.color = color
        self.accion = accion #Si self ya esta en un def, pertenece a éste y no se debe volver a copiar en uno siguiente
        self.habilitado = True

    def pulsar(self):
        if self.accion: #Esto se usa para saber si accion si tiene un contenido, si no lo tiene no se ejecuta (si es "None")
            if self.habilitado:
                self.accion()
            else:
                print('Estoy desactivado, déjame en paz....')

def habilitar(self):
    self.habilitado = True
def holaMundo():
    print('Hola mundo')

def opinion():
    print('Odio la POO... ¿Que m****a es esto?')

boton1 = Boton(texto = 'Hola', accion = opinion)
boton2 = Boton(texto = 'Hola', accion = holaMundo)
boton1.pulsar()
boton2.pulsar()