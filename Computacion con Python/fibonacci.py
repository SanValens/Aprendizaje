#/usr/bin/env python3.8
#Recursividad Múltiple - POLINOMINIAL
def fibonacci(n):
    if n == 0 or n == 1:
        return 1  
    return fibonacci(n - 1) + fibonacci(n - 2)

fibonacci(8)