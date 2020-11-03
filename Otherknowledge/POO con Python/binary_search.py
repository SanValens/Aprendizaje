#/usr/bin/env python3.8
#Logarítmico
import random

def binary_search(lista, comienzo, final, objetivo):
    print(f'Buscando {objetivo} entre {lista[comienzo]} y {lista[final - 1]}')
    if comienzo > final:
        return False

    medio = (comienzo + final) // 2

    if lista[medio] == objetivo:
        return True
    elif lista[medio] < objetivo:
        return binary_search(lista, medio + 1, final, objetivo)
    else:
        return binary_search(lista, comienzo, medio - 1, objetivo)


if __name__ == '__main__':
    tamano_de_lista = int(input('¿De que tamaño es la lista? '))
    objetivo = int(input('¿Qué numero quieres encontrar? '))

    lista = sorted([random.randint(0, 100) for i in range(tamano_de_lista)])
    #Usamos sorted para...ordenarlo
    encontrado = binary_search(lista, 0, len(lista), objetivo)

    print(lista)
    print(f'El elemento {objetivo} {"esté" if encontrado else "no está"} en la lista')