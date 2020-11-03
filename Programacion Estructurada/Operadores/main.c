#include <stdio.h>
#include <stdlib.h>

int main()
{
    int rSum;
    float rRes;
    float rDiv;
    float rMult;
    int rMod;

    rSum = 7 + 3;
    rRes = 7.1 - 3.5;
    rDiv = 7.0 / 3.0;
    rMult = 7 * 3;
    rMod = 7%3;

    printf("El resultado de la suma: %i \n", rSum);
    printf("El resultado de la resta: %f \n", rRes);
    printf("El resultado de la division: %f \n", rDiv);
    printf("El resultado de la multiplicacion: %f \n", rMult);
    printf("El módulo de la division es: %i \n", rMod);

    return 0;
}
