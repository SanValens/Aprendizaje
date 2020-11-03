#/usr/bin/env python3.8
#Este codigo es la union de aproximacion.py y de Enumeracion.py

def raizInexacta(valor, respuesta): #Respuesta entra como int, pero se convierte en float con paso
    epsilon = 0.01
    paso = epsilon**2 
    while abs(respuesta**2 - valor) >= epsilon and respuesta <= valor: #Abs es el valor absoluto
        respuesta += paso 
    if  abs(respuesta**2 - valor) >= epsilon: 
        print(f'No se encontró una raíz valida para este número, lo sentimos')
    else:
        printResult(valor, respuesta)
def raizExacta(respuesta): 
    while respuesta ** 2 < valor:
        respuesta += 1

    if respuesta ** 2 == valor:
        printResult(valor, respuesta)
    else: raizInexacta(valor, respuesta-1) #Si no es exacta, llamamos al intento con inexacto

def printResult(valor, respuesta):
    print(f'La raíz cuadrada de {valor} es {round(respuesta, 2)} /aprox.')
    #Round das primero el numero, segundo la cantidad de decimales
if __name__ == "__main__":
    valor = int(input('Elige un valor: '))
    resultado = 0
    raizExacta(resultado)