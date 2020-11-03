#include<stdio.h>
#include<stdlib.h>

int main()
{
    printf("Operadores de asignacion \n");

    int valor;


    valor = 11;

    printf("Resultado %i\n", valor);

    valor += 1;
    printf("Resultado %i\n", valor);


    valor -= 2;
    printf("Resultado %i\n", valor);


    valor *= 5;
    printf("Resultado %i\n", valor);


    valor /= 4;
    printf("Resultado %i\n", valor);


    valor %= 6;
    printf("Resultado %i\n", valor);

    return 0;
}
