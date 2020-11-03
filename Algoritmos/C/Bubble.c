#include <stdio.h>

void cambiar_pos(int *n1, int *n2){
  int exchenger = *n1;
  *n1 = *n2;
  *n2 = exchenger;
}
void bubblesort(int vector_entrada[], int n){
  int i,j;
  for(i=0; i< n-1; i++){ //Usa de una vez el numero máximo de swaps posibles para que un número de la vuelta
    for(j=0; j<n-i-1; j++){ //Por cada vuelta completa, matematicamente es necesario un swap menos para terminar, al parecer...
      //Con lo de -i parece que esta mierda funcionara con mágia, no jodas
      //[10, 5, 3, 3333]
      if(vector_entrada[j]>vector_entrada[j+1])
        cambiar_pos(&vector_entrada[j],&vector_entrada[j+1]);
    }
  }
}

int printArray(int vector_entrada[], int n){
  int i;
  for(i=0;i<n;i++)
    printf(" %d,", vector_entrada[i]);
  printf("\n Fin del ordenamiento");
}

main(int argc, char const *argv[]){
  int vector_entrada[]={10, 5, 3, 1111, 23, 644, 12, 76, 12, 0,-1, 23};
  int n = sizeof(vector_entrada)/sizeof(vector_entrada[0]); //n=tamaño del array
  //sizeOf Dice cuantos bytes existen, ¿uno por cada número? y se hace una ecuacion re rara para que salga el numero de datos
  bubblesort(vector_entrada, n);
  printArray(vector_entrada, n);
  printf("\n");
  return 0;
}