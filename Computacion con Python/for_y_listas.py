#/usr/bin/env python3.8
#Creo una lista en base a un numero y unas "reglas"
import math

reglas = [abs, math.floor, float]
#al numero tengo, 0 = valor absoluto, 1=floor, 2=float

def crearLista(num):
    '''Crea la lista en base a las reglas
    num es un numero racional que sera manipulado
    '''
    resultado = []

    for i in reglas:
        print(i)
        resultado.append(i(num))
        #i tiene el valor de reglas[x] como un metodo, entonces puede ser usado como tal
        # .append ya sabes que agrega un valor a una lista 
    return resultado

print(crearLista(-6.5))
