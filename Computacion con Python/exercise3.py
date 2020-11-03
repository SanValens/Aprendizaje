#/usr/bin/env python3.8
#Ejercicio de Busqueda Binaria para una ecuacion de tipo: 2x + 10 = 40

vecesX = int(input('x se multiplica por: '))
enteroSuma = int(input('se le suma: '))
resultadoEcuacion = int(input('y eso es igual a: '))

parteEntera = resultadoEcuacion - enteroSuma

bajo = 0
alto = max(1.0, parteEntera/0.000001) #El top no es infinito, es un numero limitado
epsilon = 0.0001
resultado = (alto + bajo) / 2
avance = epsilon**2

while abs(vecesX * resultado - parteEntera) >= epsilon:
    if (vecesX*resultado)+enteroSuma > resultadoEcuacion:
        #Finjo un resultado, si me pasé entonces bajo mi rango, si no lo "subo"
        alto = resultado
    else:
        bajo = resultado

    resultado = (alto + bajo) / 2
print(f'El valor de x es: {resultado}')