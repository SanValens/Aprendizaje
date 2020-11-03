#/usr/bin/env python3.8
def main():
    try: 
        number = int(input('Deseo el factorial de: '))
    except:
        print('Ingresa un valor valido, que sea natural')
    else: 
        print(factorial(number))
        

def factorial(n):
    #Como documentar: 
    '''Calcula el factorial de n.
        n int > 0
        returns n!
    '''
    if n == 1: #Lo detenemos en 1 y no en 0, porque x * 1 = x. Sería inutil y quita tiempo
        return 1 #Retornamos 1? No, TERMINAMOS LOS STACKS y devolvemos a las operaciones que teniamos
    return n * factorial(n-1)

main()