#/usr/bin/env python3.8
def fi_memoria(n, cache = {}): 
    #Si el cache no entra, lo creas
    if n == 0 or n == 1:
        return 1
    
    try:
        return cache[n]
        #intentamos usar lo que ya tenemos
        #si no lo tenemos, tons lo creamos y eso
    except KeyError:
        resultado = fi_memoria(n-1) + fi_memoria(n-2) 
        #Algoritmo de descomposicion de Fibonacci,
        #solo googlealo, it's a thing
        cache[n] = resultado
        return resultado

print(fi_memoria(1))