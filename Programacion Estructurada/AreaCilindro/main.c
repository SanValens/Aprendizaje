#include <stdio.h>
#include <stdlib.h>

int main()
{
    int h, r;
    float  areaCirculo, resulVolumen;

    printf("La altura del cilindro es: ");
    scanf("%i", &h);
    printf("El radio del cilindo es: ");
    scanf("%i", &r);

    areaCirculo= r*r*3.1415926;
    resulVolumen= areaCirculo*h;
    printf("El volumen del cilindro es: %f",resulVolumen);
    return 0;
}
