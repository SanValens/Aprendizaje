#/usr/bin/env python3.8
import random
from baseDatos1 import data
#Programa inicio de sesión (por alguna razón hecho en python)

def iniciarSesion():
    #Pide email y contraseña
    correoIS = input('Email: ') 
    contraseñaIS = input('Password: ')
    checkIS(correoIS, contraseñaIS)

def getEmail():
    #Recibe un email y revisa que no este siendo usado ya en nuestra base de datos
    j = True
    while j:
        email = input('Email: ')
        j = False
        for i in data:
            if email == i['email']:
                print('El email ya esta en uso')
                j = True
                break
    return email
def getID():
    #Crea un ID y le revisa si ya está en uso
    j = True
    while j:
        id_prov = random.randint(10000000, 99999999)
        j = False
        for i in data:
            if id_prov == i['id']:
                j = True #Para que el while se vuelva a repetir y cree otro id
                break #Terminamos el for de una vez, pues ya encontramos que esta usado este id
    return id_prov
def registrarse():
    #Crea una nueva cuenta (Queda guardada por la duracion de este programa)
    emailRG = getEmail()
    contraseñaRG = input('Password: ')
    new_id = getID()
    data.append({'email': emailRG, 'password': contraseñaRG, 'id': new_id})
    print('Cuenta creada exitosamente')
    menuDeInicio()
def checkIS(correo, contraseña):
    #Checka si ese correo y contraseña existe en nuestra base de datos
    successfulIS = False
    for i in data:
        if correo == i['email']:
            if contraseña == i['password']:
                successfulIS = True
                break
    if(successfulIS):
        print('Iniciando Sesion...')
        sesionIniciada()
    else:
        print('E-mail o contraseña incorrectas')
        iniciarSesion()
def checkAnswMenu(respuesta):
    #Revisa si quieres iniciar sesion o registrarte
    if respuesta == 'is':
        print('Iniciar Sesion')
        iniciarSesion()
    elif respuesta == 'rg':
        print('Registrarse')
        registrarse()
    elif respuesta == 's':
        print('Has salido')
        exit()
    else: 
        print('Respuesta no valida (Salir = S)')
        menuDeInicio()

def menuDeInicio():
    #Inicio del programa
    print("¿Desea iniciar sesión o registrarse? (IS/RG):")
    menu_respuesta = input('>>> ').lower()
    checkAnswMenu(menu_respuesta)

def sesionIniciada():
    #Termina el programa
    print('Has iniciado sesion')
    exit()

if __name__ == "__main__":
    print("Buenos días")
    menuDeInicio()