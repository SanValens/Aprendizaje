#include <stdio.h>
#include <stdlib.h>

int main()
{
    printf("Condicional switch \n");

    int  option;

    scanf("%i", &option);

    switch(option)
    {
        case 1: printf("Elegiste el numero uno \n");
            break;
        case 2: printf("Elegiste el numero dos \n");
            break;
        case 3: printf("Elegiste el numero tres \n");
            break;
        case 4: printf("Elegiste el numero cuatro \n");
            break;
        default:
            printf("Elegiste el numero no válido \n");
        break;
    }
    return 0;
}
