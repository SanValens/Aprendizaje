#/usr/bin/env python3.8
#/usr/bin/env python3.8
from random import randint

lista = [randint(0, 100) for i in range(20000)]

length = len(lista)

for i in range(length - 1):
    if lista[i] > lista[i+1]:
        valor_actual = lista[i+1]
        lista[i+1] = lista[i]
        for j in range(i+1): #Ponemos +1 porque si i es 0 no se hace ni una vez
            if valor_actual < lista[j]:
                valor_actual, lista[j] = lista[j], valor_actual
    #else continuamos con el programa