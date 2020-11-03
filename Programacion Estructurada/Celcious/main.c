#include <stdio.h>
#include <stdlib.h>

int main()
{
    float fah, result;
    printf("Transfomar de temperatura Fahrenheit a Celcious\n");
    printf("Temperatura en fahrenheit: ");
    scanf("%f", &fah);
    result=(fah-32)*5/9;
    printf("El resultado es: %f", result);
    return 0;
}
