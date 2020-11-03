#include <stdio.h>
#include <stdlib.h>

int main()
{
    int integerA;
    float floatA;
    char letterA;
    //en la siguiente linea estamos imprimiendo mi variable IntegerA

    printf("Ingresa el valor del entero A: ");
    scanf("%i", &integerA); //agregamos hacia donde se guardara el scan

    printf("Ingresa el valor del flotante A: ");
    scanf("%f", &floatA);

    printf("Ingresa el valor del texto A: ");
    scanf(" %c", &letterA);

    printf(" \nEl valor del entero A es: %i", integerA);
    printf(" \nEl valor del flotante A es: %f", floatA);
    printf(" \nEl valor del texto A es: %c", letterA);

    return 0;
}
