#include <stdio.h>

int main()
{
    int array[5] = {1, 2, 3, 4};
    for(int i = 0; i<5; i++) {
        printf("La posición en %d es: %d\n", i, array[i]);
    }
    return 0;
}
