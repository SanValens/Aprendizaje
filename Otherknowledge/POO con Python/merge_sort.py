#/usr/bin/env python3.8
#Logaritmica Lineal
from random import randint

def merge_sort(lista):
    if 1 < len(lista):
        medio = len(lista) // 2
        izq = lista[:medio]
        dch = lista[medio:]
        # llamada recursiva en cada mitad
        merge_sort(izq)
        merge_sort(dch)
        # Iteradores para recorrer las dos sublistas (comparadores)
        i = 0
        j = 0   
        # Iterador para la lista principal (que estamos construyendo)
        k = 0
        while i < len(izq) and j < len(dch):
            if izq[i] < dch[j]:
                lista[k] = izq[i]
                i += 1
            else:
                lista[k] = dch[j]
                j += 1
            k += 1
        while i < len(izq):
            lista[k] = izq[i]
            i += 1
        while j < len(dch):
            lista[k] = dch[j]
            j += 1
        
    return lista

lista  = [randint(0, 100) for i in range(20000)] #Éste metodo es super rapido
print(merge_sort(lista))
