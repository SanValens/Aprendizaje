#include <stdio.h>
#include <math.h>

/* Función de insertion Sort*/
void insertionSort(int arr[], int n) 
{ 
   int i, currentVal, j, a;
    for (i = 1; i < n; i++) //Revisa cada uno de los elementos
    { 
       currentVal= arr[i]; //obtenemos el valor actual a comparar
       j = i-1;
       /* mueve los elementos del arreglo arr[0..i-1],que son mayores que el valor de la 
       posición actual del recorrido, a una posición adelante de su posición actual */
       while (j >= 0 && arr[j] > currentVal) 
       { 
           arr[j+1] = arr[j]; 
           j -= 1; 
       }
       arr[j+1] = currentVal; //Este es diferente al j+1 de arriba pues j ahora vale menos
    } 
} 
// función auxiliar para imprimir un arrary de tamaño n 
void printArray(int arr[], int n) 
{ 
   int i; 
   for (i=0; i < n; i++)
       printf("%d ", arr[i]);
   printf("\n");
} 
/* Driver del programa para manejar el Insert Sort */
int main()
{ 
    int arr[] = {1, 4, 2, 9, 6, 21, 43}; 
    int n = sizeof(arr)/sizeof(arr[0]); 
  
    insertionSort(arr, n); 
    printArray(arr, n); 
  
    return 0; 
} 