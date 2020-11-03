#/usr/bin/env python3.8
#/usr/bin/env python3.8
#Algoritmos de optimizacion

def morral(tamano, pesos, valores, n):
    if n == 0 or tamano == 0:
        #Acabé mi programa si ya no me quedan elementos o me quedé sin espacio
        return 0

    if pesos[n - 1] > tamano: #Si el tamaño que tenemos ya no nos cabe, entonces vamos al siguiente (con recursividad)
        morral(tamano, pesos, valores, n - 1)    
    
    return max(valores[n - 1] + morral(tamano - pesos[n - 1], pesos, valores, n - 1), 
                morral(tamano, pesos, valores, n - 1)) 
    #Vamos a pensar en todas las posibilidades, sobre si coger el elemento (y teniendo en cuenta los siguientes)
    #o no tomarlo y conformarnos con las siguientes

if __name__ == "__main__":
    valores = [60, 100, 120]
    pesos = [10, 20, 30]
    tamaño_maleta = 50
    n = len(valores)
    #Vamos a empezar el programa de adelante para atras

    resultado = morral(tamaño_maleta, pesos, valores, n)
    print(resultado)
    