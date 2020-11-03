#/usr/bin/env python3.8
#Dividir nuestro Dataset
#Necesitamos un punto pivotal
#Recursivamente arreglar cada mitad del Array

def particion(arr, low, high):
  i = (low-1)
  pivot = arr[high]

  for j in range(low, high):
    if arr[j] <= pivot:
      i = i+1
      arr[i], arr[j] = arr[j], arr[i]
  arr[i+1], arr[high] =arr[high], arr[i+1]
  return (i+1)


def quickSort(arr, low, high):
  if low < high:
    """Vamos a hacer un indice para que se dividan según el 
    número de posiciones, para que tenga sentido dividir el 
    set en un número determinado para arriba y para abajo"""
    pi = particion(arr, low, high)
    #Retorna el (i+1) y esas cosas de la función de arriba
    quickSort(arr, low, pi-1)
    quickSort(arr, pi+1, high)
arr = [1992, 1990, 10, 5, 6, 100, 0, 1, -10]
n = len(arr)
quickSort(arr, 0, n-1)
print("Array ordenado: ")
for i in range(n):
  print("%d" %arr[i])