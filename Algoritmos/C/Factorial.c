/*En este código se usará return dentro de otro en vez de un ciclo, pues
eso demuestra la elegancia que se plasma en el código*/

#include <stdio.h>
long int n;
int fact(int n)
{
  if(n==0) return 1;
  /*return(1) -> retorna el valor que llevabamos guardando en el stack,
  generado por el return de abajo*/
  return (n*fact(n-1)); /* 3*2*1+/ -> el '/' significa que lo interrumpimos
  cuando 'n' llegó a 0*/
}
int main(int argc, char const *argv[])
{
  printf("Ingrese el valor al que le desea sacar el facorial: \n");
  scanf("%d", &n);
  if(n<0){
    printf("El numero debe ser positivo\n");  
  }
  else{
    printf("%d! = %ld", n, fact(n)); //Se usa fact(n) porque... lo del Stack de valores
    //"%ld" cuando es de tipo "long"
  }
  return 0;
}