#/usr/bin/env python3.8
#Este programa no da raices cuadradas exactas, para dar las que si son exactas usar programa:
    #enumeracion.py | Estos codigos se podrian juntar para sacar todo tipo de raices


numero = int(input('Escoge un numero: '))
epsilon = 0.0001 #EL rango de margen de error
paso = epsilon**2 #De a cuanto nos movemos en cada iteracion
respuesta = 0.0

while abs(respuesta**2 - numero) >= epsilon and respuesta <= numero: #Abs es el valor absoluto
    '''
    El primer statement es el que comprueba el acercamiento, fingiendo un resultado posible y
    verificando si la diferencia es mayor a epsilon (mayor a la proximidad deseada)
    El segundo comprueba que el valor no sea negativo, solo eso, porque naturalmente la condi
    cion no se va a dar
    '''
    respuesta += paso 
    #Avanzo de a muy poquito, verifiando posibles resultados, si el while se deja de cumplir
    #la diferencia entre un intento y el otro (que termina el while) es de 0.00001

if  abs(respuesta**2 - numero) >= epsilon: 
    #Es muy poco probable, porque si sucede entonces no saldriamos del while 
    print(f'No se encontró una raíz valida para este número')
else:
    print(f'La raíz cuadrada de {numero} es {respuesta}')