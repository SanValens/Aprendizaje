#/usr/bin/env python3.8
#En este codigo tambien buscamos la raiz cuadrada, pero acortamos el rango de busqueda lo mas
#Posible con el método de busqueda binaria
'''Redefinimos que es algo y que es bajo, a solo la mitad de su valor el espacio de busqueda'''

objetivo = float(input('Escoge un numero: '))
epsilon = 0.01
bajo = 0.0 #Lo empezamos desde lo mas bajo de nuestro conjunto (de numeros naturales, en este caso)
alto = max(1.0, objetivo)
#max() simplemente regresa el numero mayor de un conjunto, si objetivo es menor a 1.0, regresa 1.0
respuesta = 1.0 #Lo empezamos como la mitad del objetivo
while abs(respuesta**5 - objetivo) >= epsilon: 
    print(f'Alto = {alto}, bajo = {bajo}, respuesta = {respuesta}')
    #Aquí no usamos el segundo statement, pues los negativos se bloquean con alto al menos es 1.0
    if respuesta**5 < objetivo: #MENOR QUE OBJETIVO
        #Con el if else verificamos si nos vamos para arriba o para abajo
        bajo = respuesta
    else: 
        alto = respuesta
    
    respuesta = (alto + bajo) / 2   
print(f'{respuesta}')

#EXPLICACION DE ESTE CODIGO EN EL CUADERNO