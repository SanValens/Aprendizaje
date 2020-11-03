#/usr/bin/env python3.8
'''Programa donde ingreses la cantidad de vatios consumidos cada mes por un semestre, y teniendo encuenta 
   la ecuación costo = tasaFija + costoVatios*cantidadVatios
   donde tasaFija = $32,982 pesos y costoVatios = $11.39 por cada uno '''

tasaFija = 32982
costoVatio = 11.39

def main():
    vatios = []
    meses = 0
    while meses < 6:
        vatios.append(int(input(f'Mes {meses+1}: ')))
        meses +=1
    print_para_confirmar(vatios)
    if confirmar():
        vatios = corregir(vatios)
    calcularCuenta(vatios)        

def print_para_confirmar(arr):
    print('Confirme los valores agregados:\n')
    for i in arr:
        print(f'${i} en el mes {arr.index(i)+1}')

def confirmar():
    while True:
        confirmo = input('\n¿Eso es correcto? yes/nope: ').lower()
        if confirmo == 'yes':
            return False
        elif confirmo == 'nope':
            return True
        else:
            continue
    
def corregir(arr):
    cantidad = int(input('¿Cuántos meses son erróneos? '))
    for i in range(cantidad):
        index = int(input('Mes: ')) - 1
        valor = int(input('Valor por el que cambiar: '))
        arr.remove(arr[index])
        arr.insert(index, valor)
    return arr
        
def calcularCuenta(vatios):
    '''En base a la ecuacion de las instrucciones calculo lo que nos deben'''
    costoTotal = [tasaFija + costoVatio*i for i in vatios]
    '''¿Cómo se modifica una lista usando for?, si quiero solo hacer operaciones uso la i misma antes 
    del for y le aplico lo que quiero, si quiero filtrar solo pongo la i solita antes del for y el if despues de éste
    EJ: pares = [i for i in my_list if i % 2 == 0], eso hace un return automatico de los elementos que cumplan'''
    cancelar = 0
    for i in costoTotal:
        cancelar += i
    print(f'Debes en total por los 6 meses de energía electrica ${int(cancelar)} pesos')    

main()