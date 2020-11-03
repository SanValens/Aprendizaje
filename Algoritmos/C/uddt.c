#include <stdlib.h>
#include <stdio.h>
#include <string.h>

struct client /* La clase cliente, necesita ciertos atributos */
{
  char Name[50];
  char Id[10];
  float Credit; /* 4 bytes por estándar de Win 32bits */
  char Adress[100];
};

int main(int argc, char const *argv[]) 
{
  struct client primerCliente = {0}; //Lo que esty haciendo es lo que hice en la clase de OOP
  strcpy(primerCliente.Name, "Santiago Valenzuela");
  strcpy(primerCliente.Id, "0000000001");
  primerCliente.Credit = 1000000;
  strcpy(primerCliente.Adress, "Calle 1, Carrera 1, ciudad Bolivar");
  
  printf("The client name is: %s \n", primerCliente.Name);
  printf("The client id is: %s \n", primerCliente.Id);
  printf("The client credit is: %d \n", primerCliente.Credit);
  printf("The client Adress is: %s \n", primerCliente.Adress);

  return 0;
}

