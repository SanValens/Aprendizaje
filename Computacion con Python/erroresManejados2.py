#/usr/bin/env python3.8
def divide_elementos_lista(lista, divisor):
    try:
        return [i/divisor for i in lista]
    except ZeroDivisionError as e: #Es una buena practica ser explícitos, y guardamos la referencia en "e"
        #print(e) dice cual es el error con palabras: "division by zero"
        return lista #Pues si no logro porque lo divido en 0, solo regreso la lista y todos a dormir

lista = list(range(10)) #Creo una lista con los valores del 0 al 10

divisor = 0 #Por cuanto divido cada elemento de la lista

print(divide_elementos_lista(lista, divisor))